import { useTheme } from "@react-navigation/native"
import User from "components/User"
import { FlatList, StyleSheet, View } from "react-native"
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated"
import { GAP } from "utils/constants"
import Header from "./Header"
import { useSelector } from "react-redux"
import { RootState } from "app/store"

function List() {
  const { colors } = useTheme()

  const name = useSelector((state: RootState) => state.filters.name)
  const leaderboard = useSelector((state: RootState) => state.leaderboard)

  if (name.length == 0) return;

  return (
    <Animated.View
      entering={SlideInDown}
      exiting={SlideOutDown}
      style={[styles.list, { backgroundColor: colors.card }]}>
      <Header />

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={leaderboard.slice(0, 10)}
        renderItem={item => <User
          isSearchUser={item.item.name == name}
          rank={item.index + 1}
          leaderboard={item.item}
        />}
        ItemSeparatorComponent={() => <View style={{ height: GAP / 2 }} />}
      />
    </Animated.View>
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