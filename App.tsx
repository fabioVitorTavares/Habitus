import { StatusBar, setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppContext } from "./src/Context/AppContext";
import ColorPicker from "./src/Components/ColorPicker/ColorPicker";
import { useState } from "react";
import AddNewHabito from "./src/Screens/AddNewHabito/AddNewHabito";
import Routes from "./src/Routes/Routes";

export default function App() {
  const [categories, setCategories] = useState<string[]>([]);
  const [categorySelected, setCategorySelected] = useState<string>(
    categories[0]
  );

  const [appBackgroundColor, setAppBackgroundColor] = useState("#090");

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
      }}
    >
      <Routes />
    </AppContext.Provider>
  );
}
