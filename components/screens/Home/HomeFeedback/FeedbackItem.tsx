import IMAGES from "@/constants/images";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Image, Text, View } from "react-native";
import HomeFeedbackStyles from "./HomeFeedback.style";
const FeedbackItem = () => {
  return (
    <View style={HomeFeedbackStyles.item}>
      <View style={HomeFeedbackStyles.avatarBox}>
        <Image style={HomeFeedbackStyles.avatar} source={IMAGES.logoIcon} resizeMode='contain' />
      </View>
      <View style={HomeFeedbackStyles.contentBox}>
        <Text style={HomeFeedbackStyles.name}>Nguyễn Văn A</Text>
        <View style={HomeFeedbackStyles.ratingBox}>
          {[1, 2, 3, 4, 5].map((item, index) => {
            return <FontAwesome key={index} name='star' size={13} color='#FFD700' />;
          })}
        </View>
        <Text style={HomeFeedbackStyles.feexbackContent}>
          Giao diện website sát với phần mềm thi chứng chỉ tiếng anh B1 của trường, rất hữu ích khi làm quen với việc thi chứng
          chỉ tiếng anh B1
        </Text>
      </View>
    </View>
  );
};

export default FeedbackItem;
