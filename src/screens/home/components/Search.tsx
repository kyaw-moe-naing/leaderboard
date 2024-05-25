import { setName } from "app/actions/filters"
import { filterLeaderboard } from "app/actions/leaderboard"
import { useAppDispatch } from "app/hooks"
import { RootState } from "app/store"
import Button from "components/Button"
import SearchInput from "components/SearchInput"
import { useState } from "react"
import { SafeAreaView, View, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import { GAP } from "utils/constants"

function Search() {
  const [username, setUsername] = useState('');

  const name = useSelector((state: RootState) => state.filters.name)
  const dispatch = useAppDispatch()

  return (
    <>
      <SafeAreaView />
      <View style={styles.search}>
        <SearchInput
          value={username}
          placeholder="Search User"
          onChange={(text) => {
            setUsername(text);
            if (text.length == 0) dispatch(setName(''))
          }}
        />
        <View style={{ width: GAP / 2 }} />
        <Button
          width={120}
          title="Search"
          onPress={() => dispatch(setName(username))}
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