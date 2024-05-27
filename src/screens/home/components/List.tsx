import { useTheme } from "@react-navigation/native"
import User from "components/User"
import { FlatList, StyleSheet, View } from "react-native"
import { GAP } from "utils/constants"
import Header from "./Header"
import { useSelector } from "react-redux"
import { RootState } from "app/store"
import useGetRankHook from "utils/hooks/rank"

function List() {
  const { colors } = useTheme()

  const { name } = useSelector((state: RootState) => state.filters)
  const { generated } = useSelector((state: RootState) => state.leaderboard)

  const { getRank } = useGetRankHook()

  if (generated.length == 0) return;

  return (
    <View style={[styles.list, { backgroundColor: colors.card }]}>
      <Header />

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={generated}
        renderItem={item => <User
          isSearchUser={name != undefined && item.item.name.includes(name)}
          rank={getRank(item.item)}
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