import { StyleSheet } from "react-native";


export const {container, colorOptions} = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 160,
    height: 160,
    borderRadius: 4
  },

  colorOptions: {
    width: 50,
    height: 50,
    borderRadius: 8
  },
});