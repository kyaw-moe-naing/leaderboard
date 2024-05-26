import { searchUser } from "app/actions/leaderboard"
import { sortLeaderboard } from "app/actions/sort"
import { useAppDispatch } from "app/hooks"
import { RootState } from "app/store"
import Button from "components/Button"
import SearchInput from "components/SearchInput"
import { useState } from "react"
import { SafeAreaView, View, StyleSheet, Keyboard } from "react-native"
import { useSelector } from "react-redux"
import { GAP } from "utils/constants"

function Search() {
  const [username, setUsername] = useState('');

  const option = useSelector((state: RootState) => state.sort.option);
  const leaderboard = useSelector((state: RootState) => state.leaderboard.leaderboard);

  const dispatch = useAppDispatch()

  const search = (text: string) => {
    dispatch(searchUser({ name: text }));
    dispatch(sortLeaderboard({ option, leaderboard: text.length == 0 ? leaderboard : leaderboard.slice(0, 10) }));
    Keyboard.dismiss();
  }

  const onClear = () => {
    setUsername('');
    search('');
    Keyboard.dismiss();
  }

  return (
    <>
      <SafeAreaView />
      <View style={styles.search}>
        <SearchInput
          value={username}
          placeholder="Search User"
          onChange={setUsername}
          onClear={onClear}
        />
        <View style={{ width: GAP / 2 }} />
        <Button
          width={120}
          title="Search"
          onPress={username.length == 0 ? undefined : () => search(username)}
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