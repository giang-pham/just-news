import { ApiResponse } from "apisauce"
import { Api } from "./api"
import { GetArticleResult, GetArticlesResult } from "./api.types"
import { getGeneralApiProblem } from "./api-problem"

const API_PAGE_SIZE = 50

export class ArticleApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async getArticles(): Promise<GetArticlesResult> {
    try {
      // make the api call
      const response: ApiResponse<any> = await this.api.apisauce.get(
        "http://localhost:8055/items/news?fields[]=id,title,publish_date,source.name,banner,categories.categories_id.name&sort[]=-publish_date",
        { amount: API_PAGE_SIZE },
      )

      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      const articles = response.data.data

      return { kind: "ok", articles }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async getArticle(id: string): Promise<GetArticleResult> {
    try {
      // make the api call
      const response: ApiResponse<any> = await this.api.apisauce.get(
        `http://localhost:8055/items/news/${id}?fields[]=id,title,publish_date,source.name,content,categories.categories_id.name`,
        { amount: API_PAGE_SIZE },
      )

      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      const article = response.data.data

      return { kind: "ok", article }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
