/*
2025-03-19 11:40:21

Usage:

<BottomSheetForwardRef
  snapPoints={["25%", "50%", "70%"]}
  defaultIndex={0}
  currentIndex={currentIndex}
  handleSheetChanges={handleSheetChanges}
>
  <View>
    <Text>Hello</Text>
  </View>
</BottomSheetForwardRef>

*/
import { View, StyleSheet, Text, Button } from "react-native";
import React, { forwardRef, useCallback, useMemo, useState } from "react";
import BottomSheet, {
  BottomSheetView,
  useBottomSheet,
} from "@gorhom/bottom-sheet";
export type Ref = BottomSheet;

type Props = {
  children: React.ReactNode;
  defaultIndex?: number;
  snapPoints?: string[];
  isInputFocused?: boolean;
};

const BottomSheetForwardRef = forwardRef<Ref, Props>(
  ({ children, defaultIndex = 0, snapPoints = ["25%", "50%", "70%"] }, ref) => {
    // focus 상태 관리를 위한 state 추가
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [index, setIndex] = useState(defaultIndex);

    // 현재 BottomSheet의 index를 추적하기 위한 state 추가
    const [currentIndex, setCurrentIndex] = useState(-1);

    // callbacks
    // const handleSheetChanges = useCallback((index: number) => {
    //   console.log("handleSheetChanges", index);
    //   setCurrentIndex(index);
    // }, []);
    return (
      <View>
        {children}
        <CloseBtn className="absolute top-0 right-0" />
      </View>
    );

    // return (
    //   <BottomSheet
    //     ref={ref}
    //     index={defaultIndex}
    //     snapPoints={snapPoints}
    //     detached
    //     enablePanDownToClose
    //     animateOnMount
    //     // onChange={handleSheetChanges}
    //     handleIndicatorStyle={{ backgroundColor: "#fff" }}
    //     backgroundStyle={{ backgroundColor: "#506496" }}
    //   >
    //     <BottomSheetView>
    //       {children}
    //       <CloseBtn className="absolute top-0 right-0" />
    //     </BottomSheetView>
    //   </BottomSheet>
    // );
  }
);

export default BottomSheetForwardRef;

const CloseBtn = ({ className }: { className: string }) => {
  const { close } = useBottomSheet();

  return (
    <View className={className}>
      <Button title="Close" onPress={() => close()} />
    </View>
  );
};
