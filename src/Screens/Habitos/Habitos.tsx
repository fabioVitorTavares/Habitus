import {
  View,
  Text,
  FlatList,
  FlatListProps,
  ListRenderItem,
  SafeAreaView,
} from "react-native";
import { styles } from "./HabitosStyles";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";
import ItemHabito from "../../Components/ItemHabito/ItemHabito";

const habitos = new Array(50).fill(null).map((item, index) => {
  return { description: `Habito ${index + 1}` };
});

type ItemHabitoProps = {
  description: string;
};

const renderItem: ListRenderItem<ItemHabitoProps> = ({ item }) => {
  return <ItemHabito description={item.description} />;
};

function Separator() {
  return <View style={{ height: 5 }} />;
}

export default function Habitos() {
  return (
    <ScreenContainer>
      <View style={styles.screen}>
        <SafeAreaView style={styles.flatList}>
          <FlatList
            data={habitos}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <Separator />}
          />
        </SafeAreaView>
      </View>
    </ScreenContainer>
  );
}
