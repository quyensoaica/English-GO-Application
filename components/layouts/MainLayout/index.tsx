import React from "react";
import { ScrollView, View } from "react-native";
import WellcomeBox from "../components/WellcomeBox";
import MainLayoutStyles from "./MainLayout.style";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <View style={MainLayoutStyles.container}>
      <View style={MainLayoutStyles.wellcomeBox}>
        <WellcomeBox />
      </View>
      <ScrollView style={MainLayoutStyles.contentBox} showsVerticalScrollIndicator={false}>
        {children}
        <View style={MainLayoutStyles.lastBox}></View>
      </ScrollView>
    </View>
  );
};

export default MainLayout;
