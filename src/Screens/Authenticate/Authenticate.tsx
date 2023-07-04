import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationProp } from "@react-navigation/native";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";
import { useEffect, useState } from "react";
import Visor from "../../Components/Visor/Visor";
import Touchs from "../../Components/Touchs/Touchs";
import { styles } from "./AuthenticateStyles";

type NavigationType = {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
};

export default function Authenticate({ navigation }: NavigationType) {
  const [pin, setPin] = useState("");
  const [pinInvalid, setPinInvalid] = useState(false);

  useEffect(() => {
    if (pin.length === 6) {
      if (pin === "123456") {
        setPin("");
        navigation.navigate("App");
        setPinInvalid(false);
      } else {
        setPinInvalid(true);
      }
    } else {
      setPinInvalid(false);
    }
  }, [pin]);

  return (
    <ScreenContainer>
      <View style={styles.authenticateContainer}>
        <Text style={styles.titleAuthenticate}>
          Digite seu código para acessar
        </Text>
        <Visor pin={pin} pinError={pinInvalid} />
        <Touchs setState={setPin} />
      </View>
    </ScreenContainer>
  );
}
