import { View, Text, Button, StyleSheet } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

const explore = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // snapPoints
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };

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
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  contentContainer: {
    // flex: 1,
    alignItems: "center",
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: "600",
    padding: 20,
    color: "#fff",
  },
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
