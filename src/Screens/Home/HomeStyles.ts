import { StyleSheet } from "react-native";
import { centerItens, fullSize } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  homeContainer: {
    ...fullSize,
    display: 'flex',
    paddingVertical: 50,
    gap: 20
  }, 
  headerHome: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginHorizontal: 20,
    gap: 20
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#0009"
  },
  cardTopHome: {
    height: 160,
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: '#0004'
  },
   itemListHabitos: {
    ...centerItens,
    width: '100%',    
    height: 50,
    borderRadius: 8,
    backgroundColor: '#0005',
    marginBottom: 10,
  },
  modal: {
    ...fullSize,
    ...centerItens,
    
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#0005'
  }
});