import {
  View,
  Text,
  Platform,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { useSegments } from "expo-router";
import { useSharedValue } from "react-native-reanimated";
import React from "react";
import Carousel, {
  Pagination,
  ICarouselInstance,
} from "react-native-reanimated-carousel";
import { SBItem } from "@/components/SBItem";
import FirstItem from "@/components/FirstItem";
import SecondItem from "@/components/SecondItem";

const data = [
  { id: "1", component: <FirstItem /> },
  { id: "2", component: <SecondItem /> },
];

const renderItem = (index: any) => {
  switch (index) {
    case 0:
      return <FirstItem />;
    case 1:
      return <SecondItem />;
    default:
      return <></>;
  }
};
export default function Home() {
  const insets = useSafeAreaInsets();

  const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue<number>(0);
  const [isVertical, setIsVertical] = React.useState(false);
  const [isFast, setIsFast] = React.useState(false);
  const [isAutoPlay, setIsAutoPlay] = React.useState(false);
  const [isPagingEnabled, setIsPagingEnabled] = React.useState(true);
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const baseOptions = isVertical
    ? ({
        vertical: true,
        width: windowWidth,
        height: 150,
      } as const)
    : ({
        vertical: false,
        width: windowWidth,
        height: 150,
      } as const);

  return (
    <>
      <View>
        <Image
          source={require("../../assets/images/starry-banner.jpg")}
          style={{ height: 200 }}
        />
        <View
          style={{
            paddingTop: insets.top,
            position: "absolute",
            paddingLeft: insets.left + 10,
          }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Good Day!
          </Text>
          <Text
            style={{
              backgroundColor: "transparent",
              color: "#ffffff",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Julius Punay
          </Text>
        </View>
      </View>

      <View
        style={{
          zIndex: 2,
          marginTop: -70,
          alignItems: "center",
          justifyContent: "center",
          height: 100,
        }}
      >
        <Carousel
          data={data}
          {...baseOptions}
          loop={false}
          enabled // Default is true, just for demo
          ref={ref}
          defaultScrollOffsetValue={scrollOffsetValue}
          testID={"xxx"}
          style={{
            borderRadius: 8,
          }}
          autoPlay={isAutoPlay}
          autoPlayInterval={isFast ? 100 : 2000}
          onScrollStart={() => {
            return console.log("===1");
          }}
          onScrollEnd={() => {
            console.log("===2");
          }}
          onConfigurePanGesture={(g) => g.enabled(false)}
          pagingEnabled={true}
          snapEnabled={false}
          onSnapToItem={(index) => console.log(`snapped ${index}`)}
          renderItem={({ index }) => renderItem(index)}
          onProgressChange={progress}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
        />

        <Pagination.Basic
          progress={progress}
          data={data}
          activeDotStyle={{ backgroundColor: "#131313" }}
          dotStyle={{
            backgroundColor: "#dadada",
            overflow: "hidden",
            borderRadius: 50,
            height: 5,
            width: 5,
          }}
          containerStyle={{
            gap: 4,
            position: "absolute",
            bottom: -60,
            height: 5,
          }}
        />
      </View>
    </>
  );
}
