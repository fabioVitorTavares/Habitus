declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
import * as SplashScreen from "expo-splash-screen";
import * as LocalAuthentication from "expo-local-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppContext } from "./src/Context/AppContext";
import { useCallback, useEffect, useState } from "react";
import Routes, { RootStackParamList } from "./src/Routes/Routes";
import { useWindowDimensions } from "react-native";

export default function App() {
  const [load, setLoad] = useState(false);
  const [requireAuthetication, setRequireAuthentication] = useState(false);
  const [auth, setAuth] = useState(false);
  const { width: widthScreen, height: heightScreen } = useWindowDimensions();

  const [appBackgroundColor, setAppBackgroundColor] = useState("#FFF");
  const [categories, setCategories] = useState<string[]>([]);
  const [categorySelected, setCategorySelected] = useState<string>(
    categories[0]
  );

  const getData = async () => {
    const value = await AsyncStorage.getItem("requireAuthentication");
    const reqAuth =
      typeof value !== "string" ? false : Boolean(JSON.parse(value));
    setRequireAuthentication(reqAuth);
    return reqAuth;
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = useCallback(async () => {
    try {
      const requireAutheticationCache = await getData();
      console.log("Log line 40: ", {
        a: Boolean(JSON.parse(requireAutheticationCache as unknown as string)),
      });
      if (requireAutheticationCache) {
        const { success } = await LocalAuthentication.authenticateAsync({
          promptMessage: "Autenticação para acessar o app",
        });
        if (success) {
          await SplashScreen.hideAsync();
          setAuth(true);
        }
      } else {
        setAuth(true);
      }
    } catch (e) {}
  }, [auth]);

  if (!auth) {
    return null;
  }

  return (
    <AppContext.Provider
      value={{
        theme: "dark",
        backgroundColor: appBackgroundColor,
        setColor: setAppBackgroundColor,
        categories,
        setCategories,
        categorySelected,
        setCategorySelected,
        requireAuthetication,
        setRequireAuthentication,
        load,
        setLoad,
        widthScreen,
        heightScreen,
      }}
    >
      <Routes />
    </AppContext.Provider>
  );
}
