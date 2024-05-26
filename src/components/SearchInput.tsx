import { useTheme } from "@react-navigation/native"
import { ClearIcon, SearchIcon } from "assets/icons/icons"
import { useState } from "react"
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import InputProps from "types/components/input"
import { GAP } from "utils/constants"
import { PlusJakartaSans } from "utils/fonts"

function SearchInput(props: InputProps) {
  const {
    value,
    placeholder,
    onChange,
    onEndEditing,
    onClear
  } = props;
  const { colors } = useTheme();

  const [focused, setFocused] = useState(false)

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: focused ? colors.primary : colors.card
        }
      ]}>
      <SearchIcon size={18} color={colors.text} />
      <TextInput
        style={[styles.input, { color: colors.text }]}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.border}
        selectionColor={colors.text}
        onChangeText={onChange}
        onEndEditing={e => onEndEditing ? onEndEditing(e.nativeEvent.text) : undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {value &&
        <TouchableOpacity onPress={onClear}>
          <ClearIcon size={18} color={colors.text} />
        </TouchableOpacity>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    padding: GAP,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 48,
    padding: GAP / 2,
    fontFamily: PlusJakartaSans.regular,
    fontSize: 14,
  }
})

export default SearchInput