import { StyleSheet } from "react-native";
import {centerItens} from '../../Styles/DefaultsStyles'

export const styles = StyleSheet.create({
  buttonGoBack: {
    ...centerItens,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#0002',
    width: 60,
    position: 'absolute',
    left: 0,
  },
  textButton: {
    fontSize: 18,
    color: '#FFF'
  },
});