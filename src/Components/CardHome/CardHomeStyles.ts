import { StyleSheet } from "react-native";
import { centerItens  } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  card: {
    height: 150,
    width: 100,
    ...centerItens,
    borderRadius: 10,
    backgroundColor: '#0006',
    borderWidth: 1
  }
});