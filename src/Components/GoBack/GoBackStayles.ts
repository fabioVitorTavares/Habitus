import { StyleSheet } from "react-native";
import {centerItens} from '../../Styles/DefaultsStyles'

export const styles = StyleSheet.create({
  buttonGoBack: {
    ...centerItens,
    borderRadius: 8,
    backgroundColor: '#0002',
    width: 60,
    height: 40,
    position: 'absolute',
    left: 0,
  },
  textButton: {
    fontSize: 18,
    color: '#FFF'
  },
});