import COLORS from "@/constants/color";
import IMAGES from "@/constants/images";
import { Stack } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

const AuthLayout = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundPrimary,
        padding: 20,
      }}
    >
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 30, marginBottom: 30 }}>
        <Image source={IMAGES.logoIcon} resizeMode='contain' style={{ width: 150, height: 150 }} />
      </View>
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: COLORS.backgroundPrimary, flex: 1 } }}>
        <Stack.Screen name='login' />
        <Stack.Screen name='register' />
      </Stack>
    </View>
  );
};

export default AuthLayout;
