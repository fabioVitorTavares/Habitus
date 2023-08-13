import { View, Animated } from "react-native";
import { styles } from "./TogleStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

type TogleProps = {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};
export default function Togle({ state, setState }: TogleProps) {
  function hadleToglePress() {
    setState(!state);
  }

  const togleOptAnimation = useRef(
    new Animated.ValueXY({ x: 1, y: 0 })
  ).current;

  const togleOptAnimationAtive = () => {
    if (togleOptAnimation)
      Animated.timing(togleOptAnimation, {
        toValue: { x: 27, y: 0 },
        duration: 100,
        useNativeDriver: false,
      }).start();
  };

  const togleOptAnimationInative = () => {
    if (togleOptAnimation)
      Animated.timing(togleOptAnimation, {
        toValue: { x: 1, y: 0 },
        duration: 100,
        useNativeDriver: false,
      }).start();
  };

  useEffect(() => {
    if (state) togleOptAnimationAtive();
    if (!state) togleOptAnimationInative();
  }, [state]);

  return (
    <TouchableOpacity onPress={hadleToglePress}>
      <View
        style={{
          ...styles.togle,
          backgroundColor: state ? "#3627d9" : "#FFF",
        }}
      >
        <Animated.View
          style={{
            ...styles.togleOpt,
            left: togleOptAnimation?.x,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}
