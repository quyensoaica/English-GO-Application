import MainLayout from "@/components/layouts/MainLayout";
import React from "react";
import HomeAbout from "./HomeAbout";
import HomeBanner from "./HomeBanner";
import HomeEvaluate from "./HomeEvaluate";
import HomeFeedback from "./HomeFeedback";
import HomeHeader from "./HomeHeader";

const HomeScreen = () => {
  return (
    <MainLayout>
      <HomeHeader />
      <HomeBanner />
      <HomeAbout />
      <HomeFeedback />
      <HomeEvaluate />
    </MainLayout>
  );
};

export default HomeScreen;
