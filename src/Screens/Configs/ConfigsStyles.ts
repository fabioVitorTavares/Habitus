import { StyleSheet } from "react-native";

const { dfajc, whcpc } = StyleSheet.create({
  dfajc: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  whcpc: {
    width: "100%",
    height: "100%",
  }
});


export const styles = StyleSheet.create({
  homeContainer: {
    ...whcpc,
    display: 'flex',
    padding: 50,
  },
  cardsContainer: {
    ...whcpc,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 1
  }
});