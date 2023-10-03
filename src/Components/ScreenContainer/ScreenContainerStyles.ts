import { StyleSheet } from "react-native";
import {centerItens, fullSize} from '../../Styles/DefaultsStyles'


export const styles = StyleSheet.create({
  screenContainer: {
    ...centerItens,
    ...fullSize,
    padding: 10,
  }  
});