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
    height: 400,
    borderRadius: 10,
    zIndex: 2,
    padding: 20,
  },
  text: {
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#0005",
    height: 50,
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 10,
  },
  containerInputs: {
    width: "100%",
    marginBottom: 20
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itensContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    backgroundColor: 'red'
    
  },
  categoryItem: {
    paddingLeft: 10
  },
  iconPlus: {
    position: 'absolute',
    right: 20,
    top: 8
  }
});