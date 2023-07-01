import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationProp } from "@react-navigation/native";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";
import { useState } from "react";

type NavigationType = {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
};

export default function Authenticate({ navigation }: NavigationType) {
  const [pin, setPin] = useState("");

  const Visor = () => {
    return (
      <View>
        <Text>{pin}</Text>
      </View>
    );
  };

  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, "C", 0, "<"];

  const Touchs = () => {
    return (
      <View>
        {numbers.map((n) => {
          return (
            <TouchableOpacity
              key={`${Math.random()}${n}`}
              onPress={() =>
                n === "<"
                  ? setPin((prev) => prev.slice(0, prev.length - 1))
                  : n == "C"
                  ? setPin("")
                  : setPin((prev) => `${prev}${n}`)
              }
            >
              <Text>{n}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <ScreenContainer>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("App")}>
          <Text>Authenticate</Text>
          <Visor />
          <Touchs />
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}
