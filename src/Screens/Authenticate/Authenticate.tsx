import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationProp } from "@react-navigation/native";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";
import { useState } from "react";
import Visor from "../../Components/Visor/Visor";
import Touchs from "../../Components/Touchs/Touchs";

type NavigationType = {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
};

export default function Authenticate({ navigation }: NavigationType) {
  const [pin, setPin] = useState("");

  return (
    <ScreenContainer>
      <View style={{ width: "100%", padding: 50 }}>
        <TouchableOpacity onPress={() => navigation.navigate("App")}>
          <Text>Insira o PIN</Text>
        </TouchableOpacity>
        <Visor pin={pin} />
        <Touchs setState={setPin} />
      </View>
    </ScreenContainer>
  );
}
