import { StyleSheet } from "react-native";
import { centerItens, fullSize } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  homeContainer: {
    ...fullSize,
    display: 'flex',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  configOptContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});