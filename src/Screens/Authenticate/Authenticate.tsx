import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationProp } from "@react-navigation/native";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Visor from "../../Components/Visor/Visor";
import Touchs from "../../Components/Touchs/Touchs";
import { styles } from "./AuthenticateStyles";
import { AppContext } from "../../Context/AppContext";

type NavigationType = {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
};

export default function Authenticate({ navigation }: NavigationType) {
  const [pinDigited, setPinDigited] = useState("");
  const [pinInvalid, setPinInvalid] = useState(false);
  const { authenticateWithPin, pin } = useContext(AppContext);

  useEffect(() => {
    if (!authenticateWithPin) navigation.navigate("App");
  }, [authenticateWithPin]);

  useEffect(() => {
    if (pinDigited.length === 6) {
      if (pinDigited === pin) {
        setPinDigited("");
        navigation.navigate("App");
        setPinInvalid(false);
      } else {
        setPinInvalid(true);
      }
    } else {
      setPinInvalid(false);
    }
  }, [pinDigited]);

  return (
    <ScreenContainer>
      <View style={styles.authenticateContainer}>
        <Text style={styles.titleAuthenticate}>
          Digite seu código para acessar
        </Text>
        <Visor pin={pinDigited} pinError={pinInvalid} />
        <Touchs setState={setPinDigited} />
      </View>
    </ScreenContainer>
  );
}
