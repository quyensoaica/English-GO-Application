import { StyleSheet } from "react-native";

const inputCustomStyles = StyleSheet.create({
  defaultInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    transitionDuration: "0.5s",
    transitionProperty: "all",
    transitionTimingFunction: "ease-in-out",
  },
  focusInput: {
    borderColor: "blue",
  },
});
export default inputCustomStyles;
