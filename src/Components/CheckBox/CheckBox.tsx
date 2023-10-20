import { useEffect } from "react";
import Svg, { Path } from "react-native-svg";
import { TouchableOpacity, View } from "react-native";
import { checkBoxChecked, checkBoxUnchecked } from "./CheckBoxStyles";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
const PathAnimated = Animated.createAnimatedComponent(Path);

type CheckBoxProps = {
  checked: boolean;
  setChecked: () => void;
};

export default function CheckBox({ checked, setChecked }: CheckBoxProps) {
  const pathWidth = useSharedValue(0);

  const styleAnimated = useAnimatedStyle(() => {
    return {
      stroke: "#116604",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "8",
      d: "M82 10L40 60l-20-20",
      strokeDasharray: 97,
      strokeDashoffset: interpolate(
        pathWidth.value,
        [0, 0.5, 1],
        [-95, -65, 0]
      ),
    };
  });

  useEffect(() => {
    if (!checked) {
      pathWidth.value = 0;
    }
    if (checked) {
      pathWidth.value = withTiming(1, {
        duration: 300,
        easing: Easing.ease,
      });
    }
  }, [checked]);

  const svg = (
    <Svg
      height="200%"
      width="200%"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
      }}
    >
      <PathAnimated animatedProps={styleAnimated} />
    </Svg>
  );

  return (
    <TouchableOpacity
      style={checked ? checkBoxChecked : checkBoxUnchecked}
      onPress={setChecked}
    >
      {checked && svg}
    </TouchableOpacity>
  );
}
