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
  screen: {
    ...dfajc,
    ...whcpc,
    borderWidth: 1,
    justifyContent: 'flex-start'
  },
  titleDay: {
    fontSize: 40,
  }


});