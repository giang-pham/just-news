import React, { useEffect } from "react"
import { FlatList, TextStyle, View, ViewStyle, } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Header, Screen, Wallpaper } from "../../components"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"
import { ArticleListItem } from "./artilce-list-item"

const FULL: ViewStyle = {
  flex: 1,
}
const CONTAINER: ViewStyle = {
  backgroundColor: color.background,
}
const HEADER: TextStyle = {
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: spacing[4],
  paddingTop: spacing[3],
}
const HEADER_TITLE: TextStyle = {
  fontSize: 12,
  fontWeight: "bold",
  letterSpacing: 1.5,
  lineHeight: 15,
  textAlign: "center",
}

const FLAT_LIST: ViewStyle = {
  paddingHorizontal: spacing[4],
}


export const ArticleListScreen = observer(function ArticleListScreen() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  const { articleStore } = useStores()
  const { articles } = articleStore

  useEffect(() => {
    async function fetchData() {
      await articleStore.getArticles()
    }

    fetchData()
  }, [])

  return (
    <View testID="ArticleListScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
        <Header
          headerTx="demoListScreen.title"
          leftIcon="back"
          onLeftPress={goBack}
          style={HEADER}
          titleStyle={HEADER_TITLE}
        />
        <FlatList
          contentContainerStyle={FLAT_LIST}
          data={articles}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ArticleListItem {...item} ></ArticleListItem>
          )}
        />
      </Screen>
    </View>
  )
})
