import React, { Component, useContext } from "react";
import { View, Text } from "react-native";
import { AppContext } from "../../Context/AppContext";
import { styles } from "./ScreenContainerStyles";
import Load from "../Load/Load";

type ComponentType = {
  children: JSX.Element;
};

export default function ScreenContainer({ children }: ComponentType) {
  const { theme, backgroundColor, load } = useContext(AppContext);

  return (
    <View style={{ ...styles.screenContainer }}>
      {load && <Load />}
      {children}
    </View>
  );
}
