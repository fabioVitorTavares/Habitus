declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppContext } from "./src/Context/AppContext";
import { useEffect, useState } from "react";
import Routes, { RootStackParamList } from "./src/Routes/Routes";
import { useWindowDimensions } from "react-native";

export default function App() {
  const [load, setLoad] = useState(false);
  const [authenticateWithPin, setAuthenticateWithPin] = useState(true);
  const [pin, setPin] = useState("123789");
  const { width: widthScreen, height: heightScreen } = useWindowDimensions();
  const [appBackgroundColor, setAppBackgroundColor] = useState("#FFF");
  const [categories, setCategories] = useState<string[]>([]);
  const [categorySelected, setCategorySelected] = useState<string>(
    categories[0]
  );

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@AWP");
      if (value !== null) {
        setAuthenticateWithPin(value === "true");
      }
    } catch (e) {}
  };

  useEffect(() => {
    getData();
  }, []);

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
        authenticateWithPin,
        setAuthenticateWithPin,
        pin,
        setPin,
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
