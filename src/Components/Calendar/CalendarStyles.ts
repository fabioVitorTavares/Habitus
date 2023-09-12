import { StyleSheet } from "react-native";
import { fullSize, centerItens } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  caledarContainer: {
    ...centerItens,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '90%',
    height: 300,
    borderWidth: 1,
    

  },
  animatedTouchable: {
    ...fullSize,
  },
  carouselDay: {
    backgroundColor: '#900',
    width: 500,
    height: 100,
    
  }
});