import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const InnerBottomSheet = () => {
  return (
    <View className="p-4 flex flex-col gap-4">
      <View className="flex flex-row gap-8 items-center space-x-4 rounded-lg border p-4">
        <Ionicons name="home" size={24} color="black" />
        <View className="flex flex-col gap-2 items-start">
          <Text className="text-2xl font-bold">Home</Text>
          <Text className="text-sm text-muted-foreground">
            Return to home screen
          </Text>
        </View>
      </View>
      <View className="flex flex-row gap-8 items-center space-x-4 rounded-lg border p-4">
        <Ionicons name="home" size={24} color="black" />
        <View className="flex flex-col gap-2 items-start">
          <Text className="text-2xl font-bold">Home</Text>
          <Text className="text-sm text-muted-foreground">
            Return to home screen
          </Text>
        </View>
      </View>
      <View className="flex flex-row gap-8 items-center space-x-4 rounded-lg border p-4">
        <Ionicons name="home" size={24} color="black" />
        <View className="flex flex-col gap-2 items-start">
          <Text className="text-2xl font-bold">Home</Text>
          <Text className="text-sm text-muted-foreground">
            Return to home screen
          </Text>
        </View>
      </View>
      <View className="flex flex-row gap-8 items-center space-x-4 rounded-lg border p-4">
        <Ionicons name="home" size={24} color="black" />
        <View className="flex flex-col gap-2 items-start">
          <Text className="text-2xl font-bold">Home</Text>
          <Text className="text-sm text-muted-foreground">
            Return to home screen
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InnerBottomSheet;
