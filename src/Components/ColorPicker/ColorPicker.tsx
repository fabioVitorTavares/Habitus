import { LegacyRef, TouchEventHandler, useContext, useRef } from "react";
import { container, colorOptions } from "./ColorPickerStyles";
import { TouchableOpacity, View } from "react-native";
0;

import { GestureResponderEvent } from "react-native";
import { AppContext } from "../../Context/AppContext";
const randomColor = () => `#${Math.ceil(Math.random() * 1000)}`;

export default function ColorPicker() {
  const { setColor } = useContext(AppContext);

  const ColorOptions = () => (
    <TouchableOpacity
      style={{ ...colorOptions, backgroundColor: randomColor() }}
      onPress={pressOptionColor}
    />
  );

  function pressOptionColor(e: GestureResponderEvent) {
    setColor(
      e.target._internalFiberInstanceHandleDEV.memoizedProps.style
        .backgroundColor
    );
  }
  return (
    <View style={container}>
      <ColorOptions />
      <ColorOptions />
      <ColorOptions />
      <ColorOptions />
      <ColorOptions />
      <ColorOptions />
      <ColorOptions />
      <ColorOptions />
      <ColorOptions />
    </View>
  );
}
