import COLORS from "@/constants/color";
import { StyleSheet } from "react-native";

const StackHeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 50,
    left: 0,
  },
});
export default StackHeaderStyles;
