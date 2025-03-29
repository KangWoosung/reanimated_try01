import { View, Text, Button } from "react-native";
import React, { useRef } from "react";
import BottomSheetForwardRef from "../../treasureComponents/BottomSheetForwardRef";
import BottomSheet from "@gorhom/bottom-sheet";
import InnerBottomSheet from "../_components/InnerBottomSheet";

const explore = () => {
  // create ref first
  const bottomSheetRef = useRef<BottomSheet>(null);

  // snapPoints -- optional
  // const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

  // event handlers -- optional
  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };

  // event handlers -- optional
  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Bottom Sheet Ref</Text>
      <View className="flex flex-row gap-4 mb-16">
        <Button title="Open Bottom Sheet" onPress={openBottomSheet} />
        <Button title="Close Bottom Sheet" onPress={closeBottomSheet} />
      </View>
      <View className="flex-[0.3] w-full"></View>
      <BottomSheetForwardRef
        defaultIndex={-1}
        ref={bottomSheetRef}
        backgroundColor={"white"}
      >
        <InnerBottomSheet />
      </BottomSheetForwardRef>
    </View>
  );
};

export default explore;
