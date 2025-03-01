import HeaderTextBox from "@/components/ui/HeaderTextBox";
import React from "react";
import { ScrollView, View } from "react-native";
import FeedbackItem from "./FeedbackItem";
import HomeFeedbackStyles from "./HomeFeedback.style";

const HomeFeedback = () => {
  return (
    <View style={HomeFeedbackStyles.container}>
      <HeaderTextBox titleText={"Đánh giá từ khách hàng"} descriptionText={"Khách hàng nói gì về hệ thống của chúng tôi?"} />
      <ScrollView horizontal style={HomeFeedbackStyles.list}>
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
      </ScrollView>
    </View>
  );
};

export default HomeFeedback;
