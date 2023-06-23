import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AppContext } from "../../Context/AppContext";
import { styles } from "./ScreenContainerStyles";

export default function ScreenContainer() {
  const { theme } = useContext(AppContext);

  return (
    <View style={styles.screenContainer}>
      <Text>
        Teste Habitus
        {theme}
      </Text>
    </View>
  );
}
