import { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";

type SkeletonPropsType = {
  variant?: "circle" | "box";
  height?: number;
  width: number;
};

const Skeleton = ({ width,  height = 40, variant = 'box' }: SkeletonPropsType) => {
  const opacity = useRef(new Animated.Value(0.3));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        { 
          opacity: opacity.current, 
          width, 
          height, 
          borderRadius: variant === 'box' ? 0 : height / 2 
        },
        style.Skeleton,
      ]}
    />
  );
};

const style = StyleSheet.create({
  Skeleton: {
    backgroundColor: "gray",
  },
});

export default Skeleton;
