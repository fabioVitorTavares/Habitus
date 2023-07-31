import { View, Text } from "react-native";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";
import { styles } from "./ConfigsStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Configs() {
  const { authenticateWithPin, setAuthenticateWithPin } = useContext(
    AppContext
  ) as {
    authenticateWithPin: boolean;
    setAuthenticateWithPin: Dispatch<SetStateAction<boolean>>;
  };

  const storeData = async (value: boolean) => {
    try {
      await AsyncStorage.setItem("@AWP", String(value));
      console.log("Log line 20: ", String(value));
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    storeData(authenticateWithPin);
  }, [authenticateWithPin]);

  return (
    <ScreenContainer>
      <View style={styles.homeContainer}>
        <TouchableOpacity onPress={() => setAuthenticateWithPin((p) => !p)}>
          {authenticateWithPin && <Text>true</Text>}
          {!authenticateWithPin && <Text>false</Text>}
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}
