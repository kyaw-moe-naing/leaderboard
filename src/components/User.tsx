import { useTheme } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native"
import Leaderboard from "types/models/leaderboard"
import { GAP } from "utils/constants"
import { PlusJakartaSans } from "utils/fonts"

type UserProps = {
  isSearchUser: boolean;
  rank: number;
  leaderboard: Leaderboard
}

function User(props: UserProps) {
  const { isSearchUser, rank, leaderboard } = props;
  const { colors } = useTheme()

  return (
    <View style={[styles.card, { backgroundColor: isSearchUser ? colors.primary : colors.background }]}>
      <View style={styles.rankContainer}>
        <Text style={[styles.rank, { color: colors.text }]}>{rank}</Text>
      </View>
      <Text style={[styles.name, { color: colors.text }]} numberOfLines={1}>{leaderboard.name}</Text>
      <Text style={[styles.bananas, { color: colors.text }]}>{leaderboard.bananas} Bananas</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 48,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rank: {
    fontFamily: PlusJakartaSans.bold,
    fontSize: 14,
    textAlign: 'center',
  },
  name: {
    flex: 1,
    fontFamily: PlusJakartaSans.bold,
    fontSize: 14,
  },
  bananas: {
    fontFamily: PlusJakartaSans.regular,
    fontSize: 14,
    paddingHorizontal: GAP,
  }
})

export default User