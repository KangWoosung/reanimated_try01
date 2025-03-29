import { View, Text, Button } from "react-native";
import React, { useRef } from "react";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import BottomSheetModalForwardRef from "../../treasureComponents/BottomSheetModalForwardRef";
import InnerBottomSheet from "../_components/InnerBottomSheet";

const modal = () => {
  // create ref first
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // snapPoints -- optional
  // const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

  // event handlers -- optional
  const openBottomSheet = () => {
    bottomSheetModalRef.current?.snapToIndex(0);
  };

  // event handlers -- optional
  const closeBottomSheet = () => {
    bottomSheetModalRef.current?.close();
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Bottom Sheet Modal</Text>
      <View className="flex flex-row gap-4 mb-16">
        <Button title="Open Bottom Sheet" onPress={openBottomSheet} />
        <Button title="Close Bottom Sheet" onPress={closeBottomSheet} />
      </View>
      <View className="flex-[0.3] w-full"></View>
      {/* <BottomSheetModalForwardRef
        defaultIndex={-1}
        ref={bottomSheetModalRef}
        backgroundColor={"white"}
      >
        <InnerBottomSheet />
      </BottomSheetModalForwardRef> */}
    </View>
  );
};

export default modal;
