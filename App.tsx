declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

import { StatusBar, setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppContext } from "./src/Context/AppContext";
import ColorPicker from "./src/Components/ColorPicker/ColorPicker";
import { useState } from "react";
import AddNewHabito from "./src/Screens/AddNewHabito/AddNewHabito";
import Routes, { RootStackParamList } from "./src/Routes/Routes";

export default function App() {
  const [categories, setCategories] = useState<string[]>([]);
  const [categorySelected, setCategorySelected] = useState<string>(
    categories[0]
  );

  const [authenticateWithPin, setAuthenticateWithPin] = useState(false);
  const [pin, setPin] = useState("");

  const [appBackgroundColor, setAppBackgroundColor] = useState("#FFF");

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
        pin,
      }}
    >
      <Routes />
    </AppContext.Provider>
  );
}
