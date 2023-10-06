import { StyleSheet } from "react-native";
import { centerItens, fullSize } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  screen: {
    ...centerItens,
    ...fullSize,
  },
  flatList: {
    width: '100%',   
    height: '40%', 
    padding: 10
  },
  itemListContainer:{
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0003',
    padding: 4,
    borderRadius: 4,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20
  },
  description: {
    fontSize: 14
  },
  iconeTemp: {
    width: 20,
    height: 20,
    backgroundColor: "#900",
    position:  'absolute',
    right: 15,
    borderRadius: 10,
  }
});