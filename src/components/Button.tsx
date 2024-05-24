import { useTheme } from "@react-navigation/native"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import Spinner from "react-native-spinkit"
import ButtonProps from "types/components/button"
import { PlusJakartaSans } from "utils/fonts"

function Button(props: ButtonProps) {
  const {
    loading,
    width,
    height,
    color,
    title,
    onPress
  } = props;
  const { colors } = useTheme()


  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width,
          height: height ?? 48,
          backgroundColor: color ?? colors.card
        },
      ]}
      onPress={onPress}>
      {loading ?
        <Spinner
          size={24}
          type={'Wave'}
          color={colors.text}
        /> :
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: PlusJakartaSans.bold,
    fontSize: 14,
  }
})

export default Button