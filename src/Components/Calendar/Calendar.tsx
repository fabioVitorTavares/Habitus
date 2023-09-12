import { Pressable, Text, View } from "react-native";
import { CalendarProps } from "../../Types/Types";
import { styles } from "./CalendarStyles";
import Carousel from "react-native-reanimated-carousel";
import { useEffect, useState } from "react";

const ONE_DAY_IN_MS = 86400000;
export default function Calendar({
  currentDate,
  setCurrentDate,
}: CalendarProps) {
  const [prevCurrentNextDay, setPrevCurrentNextDay] = useState<Date[]>([]);

  useEffect(() => {
    setPrevCurrentNextDay([previousDate(), currentDate, nextDate()]);
  }, [currentDate]);

  function nextDay() {
    setCurrentDate((p) => new Date(p.getTime() + ONE_DAY_IN_MS));
  }

  function previousDay() {
    setCurrentDate((p) => new Date(p.getTime() - ONE_DAY_IN_MS));
  }

  function nextDate() {
    return new Date(currentDate.getTime() + ONE_DAY_IN_MS);
  }

  function previousDate() {
    return new Date(currentDate.getTime() - ONE_DAY_IN_MS);
  }

  function changeIndexCarousel(index: number) {
    console.log("Log line 37: ", prevCurrentNextDay);
  }

  return (
    <View style={styles.caledarContainer}>
      <Carousel
        width={200}
        height={100}
        loop
        data={prevCurrentNextDay}
        scrollAnimationDuration={500}
        onSnapToItem={(index) => changeIndexCarousel(index)}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>
              {item.toLocaleDateString()}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
