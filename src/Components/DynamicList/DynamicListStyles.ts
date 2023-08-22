import { StyleSheet } from "react-native";
import { centerItens, fullSize } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({

 
  habitosList: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20
    
  },
  flatListHabitos: {
    width: "100%" ,
    
  },
  itemListHabitos: {
    ...centerItens,
    width: '100%',    
    height: 50,
    borderRadius: 8,
    backgroundColor: '#0005',
    marginBottom: 10,
    marginHorizontal: 20
    
  }
});