import { StyleSheet } from "react-native";
import { centerItens  } from "../../Styles/DefaultsStyles";

export const styles = StyleSheet.create({
  card: {
    ...centerItens,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#0005',
  },
  textContainer: {
    width: '100%',
    paddingLeft: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  description: {
    display: 'flex',
    fontSize: 16,
    fontStyle: 'italic',
    flexWrap: 'wrap',
  }
});