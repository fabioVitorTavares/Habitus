import { StyleSheet } from "react-native";
import { centerItens, fullSize } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  homeContainer: {
    ...centerItens,
    ...fullSize,
    position: 'relative',
  },
  configOptContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});