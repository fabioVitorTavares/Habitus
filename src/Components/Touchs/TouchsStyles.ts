import { StyleSheet } from "react-native";
import { centerItens, fullSize } from "../../Styles/DefaultsStyles";


export const styles = StyleSheet.create({
  
  touchsContainer: {
    width: '100%',
    height: '60%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  touchNumberContainer: {
    width: '33%',
    height: '25%',
    ...centerItens,
    padding: 5
  },
  touchNumberPressable: {
    ...fullSize,
    ...centerItens,
    borderRadius: 10,
    backgroundColor: '#2196f3'

  },
  touchNumber: {
    ...centerItens,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF'    
  },
  icon: {
    fontWeight: '900',
    fontSize: 26,
    color: '#FFF',
  }
});