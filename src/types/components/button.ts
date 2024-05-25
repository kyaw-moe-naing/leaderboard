import { DimensionValue } from "react-native";

type ButtonProps = {
  loading?: boolean;
  width?: DimensionValue;
  height?: DimensionValue;
  color?: string;
  title: string;
  onPress?: () => void;
}

type DropDownButtonProps = {
  value: string;
  onPress?: () => void;
}

export type { DropDownButtonProps }

export default ButtonProps