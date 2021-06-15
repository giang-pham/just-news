import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React from "react"
import { Image, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Text } from "../../components"
import { Article } from "../../models/article/article"


export const ArticleListItem = observer((article: Article) => {
  const LIST_CONTAINER: ViewStyle = {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  }

  const LIST_TEXT: TextStyle = {
    flexDirection: "column",
    display: "flex",
    flex: 3,
  }

  const LIST_THUMB: ViewStyle = {
    paddingLeft: 10,
    flex: 1,
    width: 80,
    height: 80
  }

  const SOURCE: TextStyle = {
    fontSize: 13,
    color: "black",
    fontWeight: '400',
    lineHeight: 16
  }

  const TITLE: TextStyle = {
    fontSize: 16,
    color: "black",
    fontWeight: '700',
    marginTop: 5
  }

  const SUB_TITLE: TextStyle = {
    fontSize: 13,
    color: "black",
    lineHeight: 20,
    fontWeight: '100',
    marginTop: 5
  }

  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('article', { articleId: article.id })}>
      <View style={LIST_CONTAINER}>

        <View style={LIST_TEXT}>
          <Text text={article.source?.name} style={SOURCE}></Text>
          <Text text={article.title} style={TITLE}></Text>
          <Text text={new Intl.DateTimeFormat("vi-VN", { month: "2-digit", day: "2-digit" })
            .format(new Date(article.publish_date)) + ' · ' + article.categories[0]?.categories_id?.name} style={SUB_TITLE}></Text>
        </View>
        <View style={LIST_THUMB}>
          <Image
            style={{ flex: 1 }}
            source={{ uri: `http://localhost:8055/assets/${item.banner}?key=thumb` }}
            resizeMode="cover"
          />
        </View>
      </View>
    </TouchableOpacity>
  )
})