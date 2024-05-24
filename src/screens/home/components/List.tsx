import { useTheme } from "@react-navigation/native"
import User from "components/User"
import { FlatList, StyleSheet, Text, View } from "react-native"
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated"
import { GAP } from "utils/constants"
import { PlusJakartaSans } from "utils/fonts"
import Header from "./Header"

function List() {
  const { colors } = useTheme()

  return (
    <Animated.ScrollView
      entering={SlideInDown}
      exiting={SlideOutDown}
      style={[styles.list, { backgroundColor: colors.card }]}>
      <Header />

      <FlatList
        scrollEnabled={false}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={item => <User
          isSearchUser={item.index == 5}
          rank={item.index + 1}
          leaderboard={{}}
        />}
        ItemSeparatorComponent={() => <View style={{ height: GAP / 2 }} />}
      />
    </Animated.ScrollView>
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