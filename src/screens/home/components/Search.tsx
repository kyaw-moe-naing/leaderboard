import Button from "components/Button"
import SearchInput from "components/SearchInput"
import { SafeAreaView, View, StyleSheet } from "react-native"
import { GAP } from "utils/constants"

function Search() {
  return (
    <>
      <SafeAreaView />
      <View style={styles.search}>
        <SearchInput
          placeholder="Search User"
          onChange={(text) => { }}
        />
        <View style={{ width: GAP / 2 }} />
        <Button
          width={120}
          title="Search"
          onPress={() => { }}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    padding: GAP,
  },
})

export default Search