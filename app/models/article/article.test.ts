import { ArticleModel } from "./article"

test("can be created", () => {
  const instance = ArticleModel.create({
    id: 1,
    title: "Title",
  })

  expect(instance).toBeTruthy()
})
