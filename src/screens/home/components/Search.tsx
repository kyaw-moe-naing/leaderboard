import { setName } from "app/actions/filters"
import { generateLeaderboard } from "app/actions/leaderboard"
import { useAppDispatch } from "app/hooks"
import { RootState } from "app/store"
import Button from "components/Button"
import SearchInput from "components/SearchInput"
import { useState } from "react"
import { SafeAreaView, View, StyleSheet, Keyboard } from "react-native"
import { useSelector } from "react-redux"
import { GAP } from "utils/constants"

function Search() {
  const [keyword, setKeyword] = useState('');
  const { name, option } = useSelector((state: RootState) => state.filters);

  const dispatch = useAppDispatch()

  const onSearch = (text: string) => {
    dispatch(setName({ name: text }))
    dispatch(generateLeaderboard({ name: text, option }));
    Keyboard.dismiss();
  }

  const onClear = () => {
    setKeyword('');
    dispatch(setName({}))
    dispatch(generateLeaderboard({ option }));
    Keyboard.dismiss();
  }

  return (
    <>
      <SafeAreaView />
      <View style={styles.search}>
        <SearchInput
          value={keyword}
          placeholder="Search User"
          onChange={setKeyword}
          onClear={onClear}
        />
        <View style={{ width: GAP / 2 }} />
        <Button
          width={120}
          title="Search"
          onPress={keyword.length == 0 ? undefined : () => onSearch(keyword)}
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