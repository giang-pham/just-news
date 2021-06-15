import { GeneralApiProblem } from "./api-problem"
import { Character } from "../../models/character/character"
import { Article } from "../../models/article/article"

export interface User {
  id: number
  name: string
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem

export type GetCharactersResult = { kind: "ok"; characters: Character[] } | GeneralApiProblem
export type GetCharacterResult = { kind: "ok"; character: Character } | GeneralApiProblem

export type GetArticlesResult = { kind: "ok"; articles: Article[] } | GeneralApiProblem
export type GetArticleResult = { kind: "ok"; article: Article } | GeneralApiProblem