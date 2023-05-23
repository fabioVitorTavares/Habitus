import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Teste from "./src/Components/Teste";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HABITUS</Text>
      <Teste />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
