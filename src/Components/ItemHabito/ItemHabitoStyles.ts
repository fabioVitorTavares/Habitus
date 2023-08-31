import { StyleSheet } from "react-native";
import { centerItens, fullSize } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  itemContainer: {
   display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
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
    width: 74,
    height: 50,
    backgroundColor: "#111",   
    borderRadius: 4,
    position: 'absolute',
    right: '2%',
    zIndex: -1
  }
});