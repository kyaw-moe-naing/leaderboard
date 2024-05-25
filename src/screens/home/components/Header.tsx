import { MenuAction, MenuView } from "@react-native-menu/menu"
import { useTheme } from "@react-navigation/native"
import { OptionPayload, setOption } from "app/actions/filters"
import { filterLeaderboard } from "app/actions/leaderboard"
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

  const filters = useSelector((state: RootState) => state.filters)
  const isSearchActive = filters.name.length > 0;

  const menuActions: MenuAction[] = [
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
  ];

  const dispatch = useAppDispatch()

  const onChange = (event: OptionPayload) => {
    dispatch(setOption(event));
    dispatch(filterLeaderboard(event))
  }

  return (
    <View style={styles.header}>
      <Text style={[styles.title, { color: colors.text }]}>Leaderboard</Text>

      <MenuView
        actions={isSearchActive ? [] : menuActions}
        onPressAction={({ nativeEvent }) => onChange(nativeEvent.event as OptionPayload)}
      >
        <DropDownButton value={filters.option} onPress={isSearchActive ? undefined : () => { }} />
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