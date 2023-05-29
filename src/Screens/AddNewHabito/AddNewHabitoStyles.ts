import { StyleSheet } from "react-native";


export const {screen, textInput, containerInputs, text, daysWeek } = StyleSheet.create({
  screen: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderWidth: 1,
    paddingTop: 100,
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
    padding: 20
  },
  daysWeek: {
    width: "100%",
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',  
  }
});