import { StyleSheet } from "react-native";
import { centerItens, fullSize } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  screen: {
    ...centerItens,
    ...fullSize,
    position: 'relative',
  },
  text: {
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#0005",
    paddingLeft: 20,
    height: 50,
    borderRadius: 5,
    fontSize: 16,
  },
  containerInputs: {
    width: "100%",
    padding: 10
  },
  daysWeek: {
    width: "100%",
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',  
  },
  pickerContainer: {
    borderWidth: 1,
    height: 50,
    borderRadius: 5,
    fontSize: 16,
    borderColor: "#0005",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10
  },
  picker: {
    height: 50,
    width: "80%" 
  },
  addCategory: {
    ...centerItens,
    ...fullSize,
  },
  buttonsContainer: {
    position: "absolute",
    top: 50,
    width: '100%',
  },  
  textButton: {
    fontSize: 18,
    color: '#FFF'
  },
  buttonSave: {
    ...centerItens,
    width: 80,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'blue',
    position: 'absolute',
    top: 0,
    right: 10,
  },
});