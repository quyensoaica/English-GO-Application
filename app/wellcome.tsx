import { Button } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

const Wellcome = () => {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={() => router.back()}>Click me</Button>
    </View>
  );
};

export default Wellcome;
