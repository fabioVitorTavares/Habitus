import { StyleSheet } from "react-native";
import { centerItens, fullSize } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  homeContainer: {
    ...fullSize,
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 40,
  }, 
  cardsContainer: {
    height: '30%',
    display: 'flex',
    gap: 10,
    justifyContent: 'space-between',
  }, 
  headerHome: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginHorizontal: 20,
    gap: 20
  },
 
   itemListHabitos: {
    ...centerItens,
    width: '100%',    
    height: 50,
    borderRadius: 8,
    backgroundColor: '#0005',
    marginBottom: 10,
  },
  
});