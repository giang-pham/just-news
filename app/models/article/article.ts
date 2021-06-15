import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Article model
 */
const ArticleSourceModel = types.model("ArticleSourceModel").props({
  name: types.maybe(types.string)
})

const CategoriesIdModel = types.model("CategoriesIdModel").props({
  name: types.maybe(types.string)
})

const CategoriesModel = types.model("CategoriesModel").props({
  categories_id: types.maybe(CategoriesIdModel)
})

export const ArticleModel = types.model("Article").props({
  id: types.identifierNumber,
  title: types.maybe(types.string),
  description: types.maybe(types.string),
  content: types.maybe(types.string),
  publish_date: types.maybe(types.string),
  banner: types.maybe(types.string),
  source: types.maybe(ArticleSourceModel),
  categories: types.array(CategoriesModel),
})

type ArticleType = Instance<typeof ArticleModel>
export interface Article extends ArticleType {}
type ArticleSnapshotType = SnapshotOut<typeof ArticleModel>
export interface ArticleSnapshot extends ArticleSnapshotType {}
export const createArticleDefaultModel = () => types.optional(ArticleModel, {})
