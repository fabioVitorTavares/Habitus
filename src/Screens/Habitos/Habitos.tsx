import { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import Calendar from "../../Components/Calendar/Calendar";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";
import { AppContext } from "../../Context/AppContext";
import { HabitoT } from "../../Types/Types";
import { styles } from "./HabitosStyles";
import GoBack from "../../Components/GoBack/GoBack";

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

  const iconeTemp = <View style={styles.iconeTemp} />;

  function renderItem({ item: { title, description } }: { item: HabitoT }) {
    return (
      <View style={styles.itemListContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        {iconeTemp}
      </View>
    );
  }
  return (
    <ScreenContainer>
      <View style={styles.screen}>
        <GoBack />
        <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
        {habitosOfCurrentDate && habitosOfCurrentDate?.length > 0 && (
          <SafeAreaView style={styles.flatList}>
            <FlatList
              data={habitosOfCurrentDate}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <Separator />}
              keyExtractor={(item) => item?.uuid}
            />
          </SafeAreaView>
        )}
      </View>
    </ScreenContainer>
  );
}
