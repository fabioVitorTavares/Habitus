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
import { useEffect, useState } from "react";
import Calendar from "../../Components/Calendar/Calendar";

type ItemHabitoProps = {
  description: string;
  deleteItem: (i: number) => void;
  index: number;
};

function Separator() {
  return <View style={{ height: 5 }} />;
}

export default function Habitos() {
  const [habitos, setHabitos] = useState<ItemHabitoProps[]>([]);

  function deleteItem(index: number) {
    setHabitos((p) => p.filter((item) => item.index != index));
  }

  useEffect(() => {
    setHabitos(
      new Array(50).fill(null).map((item, index) => {
        return {
          description: `Habito ${index + 1}`,
          index,
          deleteItem,
        };
      })
    );
  }, []);

  // useEffect(() => {
  //   console.log({ habitos });
  // }, [habitos]);

  const renderItem: ListRenderItem<ItemHabitoProps> = ({ item }) => {
    return (
      <ItemHabito
        description={item.description}
        deleteItem={deleteItem}
        index={item.index}
      />
    );
  };

  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  return (
    <ScreenContainer>
      <View style={styles.screen}>
        {/* <SafeAreaView style={styles.flatList}>
          <FlatList
            data={habitos}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <Separator />}
          />
        </SafeAreaView> */}
        <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
      </View>
    </ScreenContainer>
  );
}
