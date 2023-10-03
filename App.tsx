declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import * as LocalAuthentication from "expo-local-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppContext } from "./src/Context/AppContext";
import { useCallback, useEffect, useState } from "react";
import Routes, { RootStackParamList } from "./src/Routes/Routes";
import { BackHandler, StyleSheet, useWindowDimensions } from "react-native";
import { fullSize } from "./src/Styles/DefaultsStyles";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [load, setLoad] = useState(false);
  const [requireAuthetication, setRequireAuthentication] = useState(false);
  const [auth, setAuth] = useState(false);
  const { width: widthScreen, height: heightScreen } = useWindowDimensions();
  const [perfilPhotoUri, setPerfilPhotoUri] = useState<string>("");

  const [appBackgroundColor, setAppBackgroundColor] = useState("#FFF");
  const [categories, setCategories] = useState<string[]>([]);
  const [categorySelected, setCategorySelected] = useState<string>(
    categories[0]
  );

  async function loadPerfilPhoto() {
    const photoUriInCacheJson = await AsyncStorage.getItem("perfilPhotoUri");
    if (photoUriInCacheJson) {
      const photoUriInCache = JSON.parse(photoUriInCacheJson);
      setPerfilPhotoUri(photoUriInCache);
    }
  }

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
      await loadPerfilPhoto();
      const requireAutheticationCache = await getData();
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
        await SplashScreen.hideAsync();
      }
    } catch (e) {
      console.log("Log line 67: ", e);
    }
  }, [auth]);

  if (!auth) {
    return null;
  }

  const { appStyleContainer } = StyleSheet.create({
    appStyleContainer: {
      ...fullSize,
    },
  });

  return (
    <GestureHandlerRootView style={appStyleContainer}>
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
          perfilPhotoUri,
          setPerfilPhotoUri,
        }}
      >
        <Routes />
      </AppContext.Provider>
    </GestureHandlerRootView>
  );
}
