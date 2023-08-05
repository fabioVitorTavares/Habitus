import { StyleSheet } from "react-native";
import { centerItens, fullSize } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  screen: {
    ...centerItens,
    ...fullSize,
    borderWidth: 1,
    justifyContent: 'flex-start'
  },
  titleDay: {
    fontSize: 40,
  }
});