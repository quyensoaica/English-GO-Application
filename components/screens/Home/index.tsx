import React from "react";
import { View } from "react-native";
import HomeAbout from "./HomeAbout";
import HomeBanner from "./HomeBanner";
import HomeEvaluate from "./HomeEvaluate";
import HomeFeedback from "./HomeFeedback";
import HomeHeader from "./HomeHeader";

const HomeScreen = () => {
  // useEffect(() => {
  //   console.log("fetch data");
  //   const fetchData = async () => {
  //     try {
  //       const response = await http.get("/auth/get-group-roles");
  //       console.log("Axios Response:", response);
  //     } catch (error) {
  //       console.error("Axios Error:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

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
