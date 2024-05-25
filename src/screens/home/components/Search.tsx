import { setName, setOption } from "app/actions/filters"
import { filterLeaderboard, searchUser } from "app/actions/leaderboard"
import { useAppDispatch } from "app/hooks"
import Button from "components/Button"
import SearchInput from "components/SearchInput"
import { useState } from "react"
import { SafeAreaView, View, StyleSheet, Keyboard } from "react-native"
import { GAP, RankSortOptions } from "utils/constants"

function Search() {
  const [username, setUsername] = useState('');

  const dispatch = useAppDispatch()

  const onChange = (text: string) => {
    setUsername(text);
    if (text.length == 0) {
      dispatch(setName(''));
      dispatch(setOption(RankSortOptions.highest));
      dispatch(filterLeaderboard(RankSortOptions.highest));
    }
  }

  const search = () => {
    dispatch(setName(username));
    dispatch(searchUser(username));
    Keyboard.dismiss();
  }

  return (
    <>
      <SafeAreaView />
      <View style={styles.search}>
        <SearchInput
          value={username}
          placeholder="Search User"
          onChange={onChange}
        />
        <View style={{ width: GAP / 2 }} />
        <Button
          width={120}
          title="Search"
          onPress={username.length == 0 ? undefined : search}
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