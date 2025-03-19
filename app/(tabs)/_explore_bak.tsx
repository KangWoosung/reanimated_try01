import { View, Text, Button, StyleSheet } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

const explore = () => {
  // create ref first
  const bottomSheetRef = useRef<BottomSheet>(null);

  // snapPoints
  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

  // focus 상태 관리를 위한 state 추가
  const [isInputFocused, setIsInputFocused] = useState(false);

  // 현재 BottomSheet의 index를 추적하기 위한 state 추가
  const [currentIndex, setCurrentIndex] = useState(-1);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
    setCurrentIndex(index);
  }, []);

  // focus/blur 핸들러 수정
  const handleFocus = useCallback(() => {
    setIsInputFocused(true);
    // 현재 인덱스가 -1이 아닐 때만 높이 변경
    if (currentIndex !== -1) {
      bottomSheetRef.current?.snapToIndex(2);
    }
  }, [currentIndex]);

  const handleBlur = useCallback(() => {
    setIsInputFocused(false);
    // 현재 인덱스가 -1이 아닐 때만 높이 변경
    if (currentIndex !== -1) {
      bottomSheetRef.current?.snapToIndex(1);
    }
  }, [currentIndex]);

  // event handlers 수정
  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };

  const closeBottomSheet = () => {
    setIsInputFocused(false); // 닫을 때 focus 상태도 초기화
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
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        detached
        enablePanDownToClose
        animateOnMount
        onChange={handleSheetChanges}
        handleIndicatorStyle={{ backgroundColor: "#fff" }}
        backgroundStyle={{ backgroundColor: "#506496" }}
      >
        <BottomSheetView>
          <Text className="text-2xl font-bold p-4">
            Awesome Bottom Sheet 🎉
          </Text>
          <BottomSheetTextInput
            placeholder="Type something"
            className="border-2 border-gray-300 rounded-md p-2"
            style={styles.input}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({
  input: {
    marginTop: 8,
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: "rgba(151, 151, 151, 0.25)",
    color: "#fff",
  },
});
