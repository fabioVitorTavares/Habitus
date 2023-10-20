import * as React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import { TouchableOpacity, View } from "react-native";
import { checkBoxChecked, checkBoxUnchecked } from "./CheckBoxStyles";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

type CheckBoxProps = {
  checked: boolean;
  setChecked: () => void;
};

function SvgComponent() {
  // const pathWidth = useSharedValue(50);
  const pathWidth = { value: 10 };

  return (
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
      <Path
        stroke="#116604"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
        d="M82 10L40 60l-20-20"
        strokeDasharray={97}
        strokeDashoffset={pathWidth.value}
      />
    </Svg>
  );
}

export default function CheckBox({ checked, setChecked }: CheckBoxProps) {
  return (
    <TouchableOpacity
      style={checked ? checkBoxChecked : checkBoxUnchecked}
      onPress={setChecked}
    >
      <SvgComponent />
    </TouchableOpacity>
  );
}
