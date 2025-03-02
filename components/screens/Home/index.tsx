import React from "react";
import { View } from "react-native";
import HomeAbout from "./HomeAbout";
import HomeBanner from "./HomeBanner";
import HomeEvaluate from "./HomeEvaluate";
import HomeFeedback from "./HomeFeedback";
import HomeHeader from "./HomeHeader";

const HomeScreen = () => {
  return (
    <View>
      <HomeHeader />
      <HomeBanner />
      <HomeAbout />
      <HomeFeedback />
      <HomeEvaluate />
    </View>
  );
};

export default HomeScreen;
