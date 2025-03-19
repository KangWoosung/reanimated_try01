import { View, Text, Button, StyleSheet } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import BottomSheetForwardRef from "../components/BottomSheetForwardRef";
import BottomSheet from "@gorhom/bottom-sheet";

const explore = () => {
  // create ref first
  const bottomSheetRef = useRef<BottomSheet>(null);

  // snapPoints -- optional
  // const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

  // event handlers -- optional
  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };

  // event handlers -- optional
  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Bottom Sheet</Text>
      <View className="flex flex-row gap-4 mb-16">
        <Button title="Open Bottom Sheet" onPress={openBottomSheet} />
        <Button title="Close Bottom Sheet" onPress={closeBottomSheet} />
      </View>
      {/* 2024-03-17 16:30 - flex-1을 flex-[0.3]으로 변경하여 화면의 30% 정도만 차지하도록 수정 */}
      <View className="flex-[0.3] w-full"></View>
      <BottomSheetForwardRef defaultIndex={0} ref={bottomSheetRef}>
        <Text>Hello</Text>
      </BottomSheetForwardRef>
    </View>
  );
};

export default explore;
