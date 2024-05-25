import { StyleSheet, View } from "react-native"
import Search from "./components/Search"
import List from "./components/List"

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Search />
      <List />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default HomeScreen