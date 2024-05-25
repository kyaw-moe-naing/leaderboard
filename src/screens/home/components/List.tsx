import { useTheme } from "@react-navigation/native"
import User from "components/User"
import { FlatList, StyleSheet, View } from "react-native"
import { GAP } from "utils/constants"
import Header from "./Header"
import { useSelector } from "react-redux"
import { RootState } from "app/store"

function List() {
  const { colors } = useTheme()

  const name = useSelector((state: RootState) => state.filters.name)
  const leaderboard = useSelector((state: RootState) => state.leaderboard)

  if (leaderboard.length == 0) return;

  return (
    <View style={[styles.list, { backgroundColor: colors.card }]}>
      <Header />

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={leaderboard.slice(0, 10)}
        renderItem={item => <User
          isSearchUser={name.length > 0 && item.item.name.includes(name)}
          rank={item.index + 1}
          leaderboard={item.item}
        />}
        ItemSeparatorComponent={() => <View style={{ height: GAP / 2 }} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    borderRadius: 12,
  },
  listContent: {
    flexGrow: 1,
    paddingHorizontal: GAP,
  }
})

export default List