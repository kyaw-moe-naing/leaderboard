import { useTheme } from "@react-navigation/native"
import { ArrowDown, ArrowUp } from "assets/icons/icons"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { DropDownButtonProps } from "types/components/button"
import { GAP } from "utils/constants"
import { PlusJakartaSans } from "utils/fonts"

function DropDownButton(props: DropDownButtonProps) {
  const { selected, value, onPress } = props;
  const { colors } = useTheme()

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.primary }]}
      onPress={onPress}
    >
      <Text style={[styles.value, { color: colors.text }]}>{value}</Text>
      {selected ? <ArrowUp size={18} color={colors.text} /> : <ArrowDown size={18} color={colors.text} />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 36,
    paddingHorizontal: 2 * GAP / 3,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  value: {
    fontFamily: PlusJakartaSans.medium,
    fontSize: 12,
    paddingRight: GAP / 2,
  }
})

export default DropDownButton