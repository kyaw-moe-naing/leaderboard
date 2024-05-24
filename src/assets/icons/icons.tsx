import { Path, Svg } from "react-native-svg";
import IconProps from "types/components/icon";

export function SearchIcon(props: IconProps) {
  return <Svg width={props.size ?? "24"} height={props.size ?? "24"} viewBox="0 0 24 24" fill="none" >
    <Path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke={props.color ?? "#292D32"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M22 22L20 20" stroke={props.color ?? "#292D32"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
}

export function ClearIcon(props: IconProps) {
  return <Svg width={props.size ?? "24"} height={props.size ?? "24"} viewBox="0 0 24 24" fill="none" >
    <Path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke={props.color ?? "#292D32"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M9.16998 14.83L14.83 9.17004" stroke={props.color ?? "#292D32"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M14.83 14.83L9.16998 9.17004" stroke={props.color ?? "#292D32"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
    ;
}

export function ArrowDown(props: IconProps) {
  return (
    <Svg width={props.size ?? "24"} height={props.size ?? "24"} viewBox="0 0 24 24" fill="none" >
      <Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={props.color ?? "#292D32"} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M8.46997 10.74L12 14.26L15.53 10.74" stroke={props.color ?? "#292D32"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

export function ArrowUp(props: IconProps) {
  return (
    <Svg width={props.size ?? "24"} height={props.size ?? "24"} viewBox="0 0 24 24" fill="none" >
      <Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={props.color ?? "#292D32"} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M8.46997 13.26L12 9.73999L15.53 13.26" stroke={props.color ?? "#292D32"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}