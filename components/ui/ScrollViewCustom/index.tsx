import COLORS from "@/constants/color";
import React from "react";
import { ScrollView, View } from "react-native";

interface ScrollViewCustomProps {
  children: React.ReactNode;
  showsVerticalScrollIndicator?: boolean;
  style?: any;
}
const ScrollViewCustom = ({ children, showsVerticalScrollIndicator = false, style }: ScrollViewCustomProps) => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: COLORS.bgPrimary, ...style }}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    >
      {children}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default ScrollViewCustom;
