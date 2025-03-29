/*
2025-03-25 07:17:03


*/
// import "expo-dev-client";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { MMKV } from "react-native-mmkv";
import "react-native-reanimated";
import "./style/global.css";

import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import OnBoardingIndex from "./onboarding";
import { ONBOARDING_FLAG } from "../constants/constants";
import { useOnboardingStore } from "../contexts/onboardingZustand"; // Zustand
import { configureReanimatedLogger } from "react-native-reanimated";
import { ReanimatedLogLevel } from "react-native-reanimated";

// 2025-03-29 17:12:23
// disabled strict mode for reanimated
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

export default function RootLayout() {
  const { onBoardingActive, setOnBoardingActive } = useOnboardingStore();
  const colorScheme = useColorScheme();

  // MMKV Check: Check if it's onBoarding case or not
  const storage = new MMKV();
  // Make negative value because there's no value by default.
  // by factory default, it's true
  const onBoardingFlag = !storage.getBoolean(ONBOARDING_FLAG);

  // Set onBoardingActive state
  useEffect(() => {
    console.log("onBoardingActive", onBoardingActive);
    setOnBoardingActive(!onBoardingFlag);
    console.log("onBoardingFlag", onBoardingFlag);
  }, [onBoardingFlag]);

  // Render Main Screen when onBoardingFlag is false
  if (!onBoardingFlag) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </GestureHandlerRootView>
    );
  }

  // Send to OnBoarding for onBoarding case
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <OnBoardingIndex />
    </GestureHandlerRootView>
  );
}
