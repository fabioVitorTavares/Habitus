import { View, Text } from "react-native";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";
import { styles } from "./ConfigsStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

export default function Configs() {
  const isFocused = useIsFocused();
  const { setLoad, authenticateWithPin, setAuthenticateWithPin } = useContext(
    AppContext
  ) as {
    setLoad: Dispatch<SetStateAction<boolean>>;
    authenticateWithPin: boolean;
    setAuthenticateWithPin: Dispatch<SetStateAction<boolean>>;
  };

  const storeData = async (value: boolean) => {
    try {
      await AsyncStorage.setItem("@AWP", String(value));
    } catch (e) {}
  };

  async function loadTest() {
    setLoad(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("ok");
      }, 2000);
    });
    setLoad(false);
  }

  useEffect(() => {
    isFocused && loadTest();
  }, [isFocused]);

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
