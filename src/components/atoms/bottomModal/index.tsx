import React from "react";
import styles from "./styles";
import { BottomSheet } from "@rneui/themed";
import { View, Dimensions } from "react-native";
import useThemeColor from "@hooks/useThemeColor";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};
const BottomModal = ({
  isVisible,
  children,
  onCancel = () => {},
}: {
  isVisible: boolean;
  children?: any;
  onCancel?: any;
}) => {
  const ref = React.useRef<BottomSheetRefProps>(null);
  const white = useThemeColor("white");
  const gray = useThemeColor("gray");
  const black = useThemeColor("black");
  const translateY = useSharedValue(0);
  const active = useSharedValue(isVisible);

  const scrollTo = React.useCallback((destination: number) => {
    "worklet";
    active.value = destination !== 0;
    translateY.value = withSpring(destination, { damping: 50 });
  }, []);

  React.useEffect(() => {
    if (isVisible) {
      scrollTo(0);
    } else {
      scrollTo(-MAX_TRANSLATE_Y);
    }
  }, [isVisible]);

  const isActive = React.useCallback(() => {
    return active.value;
  }, []);

  React.useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
    scrollTo,
    isActive,
  ]);

  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      if (event.translationY < 0) translateY.value = 0;
    })
    .onEnd(() => {
      if (translateY.value < SCREEN_HEIGHT * 0.25) {
        scrollTo(0);
      } else if (translateY.value > SCREEN_HEIGHT * 0.25) {
        scrollTo(-MAX_TRANSLATE_Y);
        runOnJS(onCancel)();
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP
    );
    return {
      borderRadius: 16,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <BottomSheet isVisible={isVisible} onBackdropPress={onCancel} modalProps={{}}>
      <View style={styles.container}>
        <GestureHandlerRootView style={styles.gesture}>
          <Animated.View
            style={[
              styles.bottom,
              rBottomSheetStyle,
              { backgroundColor: gray },
            ]}
          >
            <GestureDetector gesture={gesture}>
              <View style={styles.gesture_element}>
                <View
                  style={{ ...styles.bottom_divider, backgroundColor: white }}
                />
              </View>
            </GestureDetector>            
            {children}
          </Animated.View>
        </GestureHandlerRootView>
      </View>
    </BottomSheet>
  );
};

export default BottomModal;
