import React, { Component, useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { AppContext } from "../../Context/AppContext";
import { styles } from "./LoadStyles";

export default function Load() {
  const { load } = useContext(AppContext);

  return (
    <View style={{ ...styles.load }}>
      <ActivityIndicator size={100} color="#0000ff" />
    </View>
  );
}
