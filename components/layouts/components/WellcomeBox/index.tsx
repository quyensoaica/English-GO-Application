import IMAGES from "@/constants/images";
import TEXTS from "@/constants/texts";
import React from "react";
import { Image, Text, View } from "react-native";
import WellcomeBoxStyles from "./WellcomeBox.style";

const WellcomeBox = () => {
  return (
    <View style={WellcomeBoxStyles.container}>
      <View style={WellcomeBoxStyles.content}>
        <Image source={IMAGES.owl1} style={WellcomeBoxStyles.image} resizeMode='contain' />
        <View style={WellcomeBoxStyles.textBox}>
          <Text style={WellcomeBoxStyles.appNameText}>{TEXTS.app.appName}</Text>
          <Text style={WellcomeBoxStyles.helloText}>Xin chào, Nguyễn Tạ Quyền</Text>
          <Text style={WellcomeBoxStyles.wellcomeText}>Hãy cùng nhau luyện thi tiếng anh B1 nào!</Text>
        </View>
      </View>
    </View>
  );
};

export default WellcomeBox;
