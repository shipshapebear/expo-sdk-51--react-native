import React from "react";
import type {
  StyleProp,
  ViewStyle,
  ViewProps,
  ImageSourcePropType,
} from "react-native";
import { Gesture, LongPressGestureHandler } from "react-native-gesture-handler";
import type { AnimateProps } from "react-native-reanimated";
import Animated, { useAnimatedGestureHandler } from "react-native-reanimated";

import Constants from "expo-constants";
import { SBImageItem } from "./SBImageItem";
import { SBTextItem } from "./SBTextItem";

interface Props extends AnimateProps<ViewProps> {
  style?: StyleProp<ViewStyle>;
  index?: number;
  pretty?: boolean;
  showIndex?: boolean;
  img?: ImageSourcePropType;
}

export const SBItem: React.FC<Props> = (props) => {
  const {
    style,
    showIndex = true,
    index,
    pretty,
    img,
    testID,
    ...animatedViewProps
  } = props;

  return <SBTextItem style={style} index={index} />;
};
