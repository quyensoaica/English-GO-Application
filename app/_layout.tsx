import ScreenWrapper from "@/components/ScreenWrapper";
import { store } from "@/stores";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import * as Font from "expo-font";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Merienda-Black": require("../assets/fonts/Merienda-Black.ttf"),
        "Merienda-Bold": require("../assets/fonts/Merienda-Bold.ttf"),
        "Merienda-ExtraBold": require("../assets/fonts/Merienda-ExtraBold.ttf"),
        "Merienda-Light": require("../assets/fonts/Merienda-Light.ttf"),
        "Merienda-Medium": require("../assets/fonts/Merienda-Medium.ttf"),
        "Merienda-Regular": require("../assets/fonts/Merienda-Regular.ttf"),
        "Merienda-SemiBold": require("../assets/fonts/Merienda-SemiBold.ttf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <ScreenWrapper bg='#fafafa'>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: "#fafafa",
              },
            }}
          >
            <Stack.Screen name='(tabs)' />
            <Stack.Screen name='index' />
            <Stack.Screen name='wellcome' />
          </Stack>
        </ScreenWrapper>
      </Provider>
    </ApplicationProvider>
  );
}
