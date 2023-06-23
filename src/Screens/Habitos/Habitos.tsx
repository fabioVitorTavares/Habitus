import {
  View,
  Text,
  FlatList,
  FlatListProps,
  ListRenderItem,
} from "react-native";
import { styles } from "./HabitosStyles";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";

const day = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const renderItem: ListRenderItem<string> = ({ item }) => {
  return <Text>{item}</Text>;
};

export default function Habitos() {
  const currentDay = new Date().getDay();
  return (
    <ScreenContainer>
      <View style={styles.screen}>
        <Text style={styles.titleDay}>{day[currentDay]}</Text>
        <FlatList data={day} renderItem={renderItem} />
      </View>
    </ScreenContainer>
  );
}
