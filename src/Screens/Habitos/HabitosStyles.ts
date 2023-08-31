import { StyleSheet } from "react-native";
import { centerItens, fullSize } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  screen: {
    ...centerItens,
    ...fullSize,
    paddingTop: 100
  },
  flatList: {
    width: '100%',    
  },
});