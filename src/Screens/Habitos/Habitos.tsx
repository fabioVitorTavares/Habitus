import { View, Text } from "react-native";
import { styles } from "./HabitosStyles";

const day = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

export default function Habitos() {
  const currentDay = new Date().getDay();
  return (
    <View style={styles.screen}>
      <Text style={styles.titleDay}>{day[currentDay]}</Text>
    </View>
  );
}
