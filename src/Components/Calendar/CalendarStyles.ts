import { StyleSheet } from "react-native";
import { fullSize, centerItens } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  caledarContainer: {
    ...centerItens,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '90%',
    height: 400,
  },
  animatedTouchable: {
    ...fullSize,
  },
  carouselDay: {
    backgroundColor: '#900',
    width: 500,
    height: 100,    
  },
  dateCarouselContainer: {
    flex: 1,
    justifyContent: "center",
  },
  dateCarousel: {
    textAlign: "center",
    fontSize: 30 
  },
  dayTouchsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 245,
    width: 301,
  },
  dayTouch: {
    ...centerItens,
    width: 43,
    height: 50,
    padding: 2
  },
  dayTouchText: {    
    ...fullSize,
    backgroundColor: '#0003',
    borderRadius: 4,
    textAlign: 'auto',
  },
  currentDay: {
    backgroundColor: '#0007',
    fontSize: 24,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  dayVoid: {
    width: 43,
    height: 50,
    opacity: 0.3
  }
});