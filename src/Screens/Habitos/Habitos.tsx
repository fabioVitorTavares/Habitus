import { useEffect, useState } from "react";
import { ListRenderItem, View } from "react-native";
import Calendar from "../../Components/Calendar/Calendar";
import ItemHabito from "../../Components/ItemHabito/ItemHabito";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";
import { styles } from "./HabitosStyles";

type ItemHabitoProps = {
  description: string;
  deleteItem: (i: number) => void;
  index: number;
};

export default function Habitos() {
  const [habitos, setHabitos] = useState<ItemHabitoProps[]>([]);

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
