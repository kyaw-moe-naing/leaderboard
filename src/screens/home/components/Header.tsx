import { MenuView } from "@react-native-menu/menu"
import { useTheme } from "@react-navigation/native"
import { OptionPayload, sortLeaderboard } from "app/actions/sort"
import { useAppDispatch } from "app/hooks"
import { RootState } from "app/store"
import DropDownButton from "components/DropDownButton"
import { View, Text, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import { GAP, NameSortOptions, RankSortOptions } from "utils/constants"
import { PlusJakartaSans } from "utils/fonts"

function Header() {
  const { colors } = useTheme()

  const nameSortOptions = Object.values(NameSortOptions);
  const rankSortOptions = Object.values(RankSortOptions);

  const option = useSelector((state: RootState) => state.sort.option);

  const name = useSelector((state: RootState) => state.leaderboard.name);
  const leaderboard = useSelector((state: RootState) => state.leaderboard.leaderboard);

  const dispatch = useAppDispatch()

  const onChange = (event: OptionPayload) => {
    dispatch(
      sortLeaderboard({
        option: event,
        leaderboard: name.length == 0 ? leaderboard : leaderboard.slice(0, 10)
      })
    )
  }

  return (
    <View style={styles.header}>
      <Text style={[styles.title, { color: colors.text }]}>Leaderboard</Text>

      <MenuView
        actions={[
          {
            id: 'Rank',
            title: 'Rank',
            subactions: rankSortOptions.map(option => {
              return {
                id: option,
                title: option,
              };
            }),
          },
          {
            id: 'Name',
            title: 'Name',
            subactions: nameSortOptions.map(option => {
              return {
                id: option,
                title: option,
              };
            }),
          }
        ]}
        onPressAction={({ nativeEvent }) => onChange(nativeEvent.event as OptionPayload)}
      >
        <DropDownButton value={option} />
      </MenuView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: GAP,
  },
  title: {
    flex: 1,
    fontFamily: PlusJakartaSans.bold,
    fontSize: 16,
  },
})

export default Header