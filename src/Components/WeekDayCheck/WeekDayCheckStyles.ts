import { StyleSheet } from "react-native";
import { fullSize, centerItens } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  weekDayCheckContainer: {
    width: '13%',
    height: 70,
    borderRadius: 4,
    backgroundColor: '#0002',
    ...centerItens,
    padding: 2,
  },
  dayName: {
    fontSize: 20,
    fontWeight: 'bold',
  } 
});