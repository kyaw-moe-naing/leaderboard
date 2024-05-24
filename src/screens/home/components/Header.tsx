import { MenuView } from "@react-native-menu/menu"
import { useTheme } from "@react-navigation/native"
import DropDownButton from "components/DropDownButton"
import { useState } from "react"
import { View, Text, StyleSheet, Animated } from "react-native"
import { GAP, SortOptions } from "utils/constants"
import { PlusJakartaSans } from "utils/fonts"

function Header() {
  const { colors } = useTheme()

  const [showOptions, setShowOptions] = useState(false);

  return (
    <View>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Leaderboard</Text>
        <DropDownButton
          selected={showOptions}
          value="Highest"
          onPress={() => setShowOptions(!showOptions)}
        />
      </View>

      <MenuView
        title="Sort By"
        actions={Object.values(SortOptions).map(option => {
          return {
            title: option,
          }
        })}
      />
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
  listContent: {
    flexGrow: 1,
    paddingHorizontal: GAP,
    // paddingVertical: GAP / 2,
  }
})

export default Header