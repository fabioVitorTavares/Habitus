import { StyleSheet } from "react-native";
import { centerItens, fullSize } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  screen: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingTop: 50,
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
  }
});