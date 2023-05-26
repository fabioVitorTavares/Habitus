import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AppContext } from "../Context/AppContext";


export default function Teste() {

  const {theme} = useContext(AppContext);

  return (
    <View>
      <Text>
        Teste Habitus
        {theme}
      </Text>
    </View>
  )
}