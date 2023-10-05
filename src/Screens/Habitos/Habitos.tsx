import { useContext, useEffect, useState } from "react";
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import Calendar from "../../Components/Calendar/Calendar";
import ItemHabito from "../../Components/ItemHabito/ItemHabito";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";
import { styles } from "./HabitosStyles";
import { AppContext } from "../../Context/AppContext";
import { HabitoT } from "../../Types/Types";

function Separator() {
  return <View style={{ height: 10 }} />;
}

export default function Habitos() {
  const { habitos } = useContext(AppContext);
  const [habitosOfCurrentDate, setHabitosOfCurrentDate] = useState<
    HabitoT[] | undefined
  >(habitos);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    if (habitos) {
      setHabitosOfCurrentDate(
        habitos.filter((h) => h.days.includes(currentDate.getDay()))
      );
    }
  }, [currentDate]);

  function renderItem({ item: { title, description } }: { item: HabitoT }) {
    return (
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
    );
  }

  return (
    <ScreenContainer>
      <View style={styles.screen}>
        <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
        {habitos?.length && (
          <SafeAreaView style={styles.flatList}>
            <FlatList
              data={habitosOfCurrentDate}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <Separator />}
            />
          </SafeAreaView>
        )}
      </View>
    </ScreenContainer>
  );
}
