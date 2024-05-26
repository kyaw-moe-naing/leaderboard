type InputProps = {
  value?: string;
  placeholder?: string;
  onChange: (text: string) => void;
  onEndEditing?: (text: string) => void;
  onClear?: () => void;
}

export default InputProps