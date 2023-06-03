import { StatusBar, setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppContext } from "./src/Context/AppContext";
import ColorPicker from "./src/Components/ColorPicker/ColorPicker";
import { useState } from "react";
import AddNewHabito from "./src/Screens/AddNewHabito/AddNewHabito";
import Routes from "./src/Routes/Routes";

export default function App() {
  const [appBackgroundColor, setAppBackgroundColor] = useState("#FFF");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: `${appBackgroundColor}`,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <AppContext.Provider
      value={{
        theme: "dark",
        color: appBackgroundColor,
        setColor: setAppBackgroundColor,
      }}
    >
      <Routes />
    </AppContext.Provider>
  );
}
