import COLORS from "@/constants/color";
import React from "react";
import { View } from "react-native";
import ProfileAction from "./ProfileAction";
import ProfileInfomation from "./ProfileInfomation";

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bgPrimary }}>
      <ProfileInfomation />
      <ProfileAction />
    </View>
  );
};

export default ProfileScreen;
