import { StyleSheet } from "react-native";
import {centerItens, fullSize} from '../../Styles/DefaultsStyles'


export const styles = StyleSheet.create({
  load: {
    ...centerItens,
    ...fullSize,
    position: 'absolute',
    backgroundColor: '#0007',
    zIndex: 1,
  }  
});