import { StyleSheet } from "react-native";

const { checkBoxDefaultStyle } = StyleSheet.create({
  checkBoxDefaultStyle: {
    width: '90%',
    height: '60%',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'visible',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export const { checkBoxChecked, checkBoxUnchecked } = StyleSheet.create({
  checkBoxChecked: {
    ...checkBoxDefaultStyle,
    backgroundColor: '#FFF'
  },
  checkBoxUnchecked: {
    ...checkBoxDefaultStyle,
    backgroundColor: '#fff'
  }
});