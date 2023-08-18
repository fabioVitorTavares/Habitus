import { View, Text } from "react-native";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";
import { styles } from "./ConfigsStyles";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import Togle from "../../Components/Togle/Togle";

export default function Configs() {
  const isFocused = useIsFocused();
  const { setLoad, requireAuthetication, setRequireAuthentication } =
    useContext(AppContext) as {
      setLoad: Dispatch<SetStateAction<boolean>>;
      requireAuthetication: boolean;
      setRequireAuthentication: Dispatch<SetStateAction<boolean>>;
    };

  const storeData = async (value: boolean) => {
    try {
      await AsyncStorage.setItem("requireAuthentication", String(value));
    } catch (e) {}
  };

  async function loadTest() {
    setLoad(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("ok");
      }, 100);
    });
    setLoad(false);
  }

  useEffect(() => {
    isFocused && loadTest();
  }, [isFocused]);

  useEffect(() => {
    storeData(requireAuthetication);
  }, [requireAuthetication]);

  return (
    <ScreenContainer>
      <View style={styles.homeContainer}>
        <View style={styles.configOptContainer}>
          <Text>Acesso com senha do aparelho</Text>
          <Togle
            state={requireAuthetication}
            setState={setRequireAuthentication}
          />
        </View>
      </View>
    </ScreenContainer>
  );
}
