import IMAGES from "@/constants/images";
import { Layout, Text, ViewPager } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import { Image, Pressable, View } from "react-native";
import wellcomeStyle from "./Wellcome.style";

const WellcomeScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const router = useRouter();
  const wellcomeTabs = useMemo(
    () => [
      {
        key: "1",
        imageSource: IMAGES.wellcome.wellcome1,
        title: `Chào mừng bạn đến với ${"\n"} Medicine Tracking`,
        button: {
          title: "Tiếp tục",
          onPress: () => setSelectedIndex(1),
        },
        description:
          "Medicine Tracking là ứng dụng giúp bạn xây dựng và theo dõi lịch trình uống thuốc một cách dễ dàng và hiệu quả",
      },
      {
        key: "2",
        imageSource: IMAGES.wellcome.wellcome2,
        title: "Wellcome to the app",
        button: {
          title: "Tiếp tục",
          onPress: () => setSelectedIndex(2),
        },
        description:
          "This is a description for the second tab This is a description for the first tab This is a description for the first tab ",
      },
      {
        key: "3",
        imageSource: IMAGES.wellcome.wellcome3,
        title: "Wellcome to the app",
        button: {
          title: "Bắt đầu",
          onPress: () => router.replace("/login"),
        },
        description:
          "This is a description for the third tab This is a description for the first tab This is a description for the first tab",
      },
    ],
    []
  );
  console.log("selectedIndex", wellcomeTabs[selectedIndex]);
  return (
    <View style={{ position: "relative" }}>
      <ViewPager selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
        {wellcomeTabs.map((tab, index) => (
          <Layout key={index} level='2' style={wellcomeStyle.tab}>
            <View>
              <Image source={tab.imageSource} style={{ width: 300, height: 400 }} resizeMode='contain' />
            </View>
            <View style={wellcomeStyle.textBox}>
              <Text style={wellcomeStyle.tabTitle}>{tab.title}</Text>
              <Text style={wellcomeStyle.tabDescription}>{tab.description}</Text>
            </View>
          </Layout>
        ))}
      </ViewPager>
      <Pressable style={wellcomeStyle.tabButton} onPress={wellcomeTabs[selectedIndex]?.button?.onPress}>
        <Text style={wellcomeStyle.tabButtonText}>{wellcomeTabs[selectedIndex]?.button?.title}</Text>
      </Pressable>
      <Pressable style={wellcomeStyle.skipButton} onPress={() => router.replace("/login")}>
        <Text style={wellcomeStyle.skipButtonText}>Bỏ qua</Text>
      </Pressable>
    </View>
  );
};

export default WellcomeScreen;
