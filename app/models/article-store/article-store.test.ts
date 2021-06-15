import { ArticleStoreModel as ArticleStoreModel } from "./article-store"

test("can be created", () => {
  const instance = ArticleStoreModel.create({})

  expect(instance).toBeTruthy()
})
