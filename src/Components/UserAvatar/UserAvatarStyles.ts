import { StyleSheet } from "react-native";
import { centerItens, fullSize } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  userAvatarContainer: {
    width: '100%',
    height: '20%',
    ...centerItens,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#0009"
  },
  avatarModal: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "#0009"
  }, 
  modal: {
    ...fullSize,
    ...centerItens,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#0005'
  },
  modalContainer: {
    ...centerItens,
    justifyContent: 'space-between',
    width: '90%',
    height: '70%',
    paddingVertical: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  textAlterPhoto: {
    fontSize: 22,
    backgroundColor: '#0003',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly'
  }
});