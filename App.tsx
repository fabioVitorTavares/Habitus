declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppContext } from "./src/Context/AppContext";
import { useEffect, useState } from "react";
import Routes, { RootStackParamList } from "./src/Routes/Routes";

export default function App() {
  const [appBackgroundColor, setAppBackgroundColor] = useState("#FFF");
  const [categories, setCategories] = useState<string[]>([]);
  const [categorySelected, setCategorySelected] = useState<string>(
    categories[0]
  );

  const [authenticateWithPin, setAuthenticateWithPin] = useState(true);
  const [pin, setPin] = useState("123789");

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem("@AWP", value);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@AWP");
      if (value !== null) {
        console.log("Log line 34: ", value);
        setAuthenticateWithPin(value === "true");
      }
    } catch (e) {
      // error reading value
    }
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
      }}
    >
      <Routes />
    </AppContext.Provider>
  );
}
