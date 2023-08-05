import { StyleSheet } from "react-native";
import { centerItens, fullSize } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  homeContainer: {
    ...fullSize,
    display: 'flex',
    padding: 50,
  },
  cardsContainer: {
    ...fullSize,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 1
  }
});