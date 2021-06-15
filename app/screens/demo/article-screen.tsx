import React, { useContext, useEffect, useState } from "react"
import { Image, FlatList, TextStyle, View, ViewStyle, ImageStyle } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"
import HTML from "react-native-render-html";
import { ScrollView } from "react-native"
import ResponsiveArticle  from "./responsive-article"

const FULL: ViewStyle = {
  flex: 1,
}
const CONTAINER: ViewStyle = {
  backgroundColor: color.background,
}

const LIST_CONTAINER: ViewStyle = {
  alignItems: "center",
  flexDirection: "column",
  padding: 10,
}

const BODY_CONTAINER: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  padding: 10,
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

const TITLE: TextStyle = {
  fontSize: 16,
  color: "black",
  fontWeight: '700',
  marginTop: 5
}

const BODY_TEXT: TextStyle = {
  color: "black"
}


export const ArticleScreen = observer(function ArticleScreen() {
  const navigation = useNavigation()
  const route:any = useRoute()
  const { articleId } = route.params;
  const goBack = () => navigation.goBack()
  const { articleStore } = useStores()
  const { currentArticle } = articleStore
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      await articleStore.getArticle(articleId)
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <View testID="ArticleScreen" style={FULL}>
      <ScrollView>
      <Wallpaper />
      <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
        <Header
          headerTx="articleScreen.title"
          leftIcon="back"
          onLeftPress={goBack}
          style={HEADER}
          titleStyle={HEADER_TITLE}
        />
        {isLoading && <View style={{margin:20}} ><ResponsiveArticle></ResponsiveArticle></View>}
        {!isLoading &&
        <View style={LIST_CONTAINER}>
          <View style={BODY_CONTAINER}>
            <Text style={BODY_TEXT} >
            <HTML source={{html: currentArticle.content}} ></HTML>
            </Text>
          </View>
        </View>
        }

      </Screen>
      </ScrollView>      
    </View>
  )
})
