import { castToSnapshot, Instance, SnapshotOut, types } from "mobx-state-tree"
import { ArticleModel, ArticleSnapshot } from "../article/article"
import { ArticleApi } from "../../services/api/article-api"
import { withEnvironment } from "../extensions/with-environment"

export const ArticleStoreModel = types
  .model("ArticleStore")
  .props({
    articles: types.optional(types.array(ArticleModel), []),
    currentArticle: types.maybe(ArticleModel),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    saveArticles: (articleSnapshots: any[]) => {
      self.articles.replace(articleSnapshots)
    },
    saveArticle: (articleSnapshot: any) => {
      self.currentArticle = articleSnapshot
    },
  }))
  .actions((self) => ({
    getArticles: async () => {
      const articleApi = new ArticleApi(self.environment.api)
      const result = await articleApi.getArticles()

      if (result.kind === "ok") {
        self.saveArticles(result.articles)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    },
    getArticle: async (id: string) => {
      const articleApi = new ArticleApi(self.environment.api)
      const result = await articleApi.getArticle(id)

      if (result.kind === "ok") {
        self.saveArticle(result.article)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    },
  }))
  .views((self) => ({
    get articles(): any[] {
      console.log(self.articles)
      return []
      // return self.articles.map(castToSnapshot)
    }
  }))

type ArticleStoreType = Instance<typeof ArticleStoreModel>
export interface ArticleStore extends ArticleStoreType { }
type ArticleStoreSnapshotType = SnapshotOut<typeof ArticleStoreModel>
export interface ArticleStoreSnapshot extends ArticleStoreSnapshotType { }
export const createArticleStoreDefaultModel = () => types.optional(ArticleStoreModel, {})
