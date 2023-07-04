import { StyleSheet } from "react-native";
import { centerItens, fullSize } from "../../Styles/DefaultsStyles";


export const styles = StyleSheet.create({
  
  visorContainer : {
    width: '100%',
    height: 50,
    ...centerItens,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  digit: {
    width: 30,
    textAlign: 'center',
    borderBottomWidth: 2,
    fontSize: 30,
    fontWeight: 'bold'
  }  
});