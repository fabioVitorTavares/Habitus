import { StyleSheet } from "react-native";

const { checkBoxDefaultStyle } = StyleSheet.create({
  checkBoxDefaultStyle: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 5,
  }
});

export const { checkBoxChecked, checkBoxUnchecked } = StyleSheet.create({
  checkBoxChecked: {
    ...checkBoxDefaultStyle,
    backgroundColor: 'red'
  },
  checkBoxUnchecked: {
    ...checkBoxDefaultStyle,
    backgroundColor: '#fff'
  }
});