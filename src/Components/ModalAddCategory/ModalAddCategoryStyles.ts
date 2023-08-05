import { StyleSheet } from "react-native";
import { centerItens, fullSize } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  modalContainer: {
    ...centerItens,
    ...fullSize,
    backgroundColor: "#0007",
  },
  modalContent: {
    position: "absolute",
    backgroundColor: "#FFF",
    width: "90%",
    height: 200,
    borderRadius: 10,
    zIndex: 2,
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
  buttonsContainer: {
    width: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  }
});