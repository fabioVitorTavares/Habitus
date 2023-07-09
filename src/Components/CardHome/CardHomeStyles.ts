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
  card: {
    height: 150,
    width: 100,
    ...dfajc,
    borderRadius: 10,
    backgroundColor: '#0005',
    borderWidth: 1
  }
});