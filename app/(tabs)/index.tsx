import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useState } from "react";
import CircularProgressBar from "@/treasureComponents/CircularProgressIndicator";
import { MMKV } from "react-native-mmkv";
import { useOnboardingStore } from "@/contexts/onboardingZustand";
import { ONBOARDING_FLAG } from "@/constants/constants";

const RADIUS = 60;
const STROKE_WIDTH = 16;
const STROKE_COLOR = "#3e95b0";
const STROKE_COLOR_BG = "#a6abbf";
const FONT_COLOR = "gray";

export default function HomeScreen() {
  const [randomNumber, setRandomNumber] = useState(0);
  const percentage = useSharedValue(0);

  const { onBoardingActive, setOnBoardingActive } = useOnboardingStore();
  const storage = new MMKV();

  //
  // const innerRadius = RADIUS - STROKE_WIDTH / 2;
  // const circumference = 2 * Math.PI * innerRadius;
  // const strokeDashoffset = useDerivedValue(() => {
  //   return circumference - (circumference * percentage.value) / 100;
  // });

  const animate = (toValue: number) => {
    percentage.value = withTiming(toValue, {
      duration: 1000,
    });
  };

  const handleRandomNumber = () => {
    const randNum = Math.floor(Math.random() * 100);
    setRandomNumber(randNum);
    animate(randNum);
    console.log("randNum", randNum);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <View className="flex flex-row items-center justify-center gap-4">
        <TouchableOpacity
          className="flex flex-row items-center justify-center gap-4"
          onPress={() => {
            setOnBoardingActive(true);
            storage.set(ONBOARDING_FLAG, false);
          }}
        >
          <Text className="text-white bg-slate-500 p-4 px-6 rounded-2xl text-lg font-bold">
            Onboarding Activate
          </Text>
        </TouchableOpacity>
      </View>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          CircularProgressIndicator Module
        </ThemedText>
      </ThemedView>
      <View className="flex-1 items-center justify-center">
        {/* CircularProgressBar */}
        <CircularProgressBar
          circleStyle={{
            strokeColor: STROKE_COLOR,
            strokeColorBg: STROKE_COLOR_BG,
            strokeWidth: STROKE_WIDTH,
            radius: RADIUS,
          }}
          textStyle={{
            fontColor: FONT_COLOR,
          }}
          percentage={percentage}
        />
      </View>
      <TouchableOpacity className="items-center" onPress={handleRandomNumber}>
        <Text className="text-gray-200 bg-slate-600 w-60 p-4 rounded-lg text-xl items-center">
          Random Number : {randomNumber}
        </Text>
      </TouchableOpacity>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
