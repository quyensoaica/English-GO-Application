import InputTypes from "@/constants/inputTypes";
import React from "react";
import { StyleProp, TextInput, TextStyle } from "react-native";
import inputCustomStyles from "./InputCustom.style";
interface InputCustomProps extends React.ComponentProps<typeof TextInput> {
  value?: string;
  onChangeText?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  style?: StyleProp<TextStyle>;
  type?: InputTypes;
  secureTextEntry?: boolean;
}
const InputCustom = ({
  value,
  onChangeText,
  placeholder,
  disabled = false,
  style,
  secureTextEntry,
  ...props
}: InputCustomProps) => {
  const [focus, setFocus] = React.useState(false);
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      editable={!disabled}
      style={[inputCustomStyles.defaultInput, focus && inputCustomStyles.focusInput, style]}
      onChangeText={(nextValue) => onChangeText && onChangeText(nextValue)}
      keyboardType='default'
      secureTextEntry={secureTextEntry}
      {...props}
    />
  );
};

export default InputCustom;
