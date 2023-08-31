import { StyleSheet } from "react-native";
import { centerItens, fullSize } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
 
  cardList: {
    ...centerItens,
    width: '96%',
    borderWidth: 1,
    height: 50,
    borderRadius: 4,
    marginLeft: '2%',
    backgroundColor: '#000',
    flexDirection: 'row'
  },
  description: {
    color: '#FFF',
    fontSize: 20
  },
  trashIcon: {
    ...centerItens,
    width: 50,
    height: 50,
    backgroundColor: "#000",
    position: 'absolute',
    right: -50,
    borderRadius: 4
  }
});