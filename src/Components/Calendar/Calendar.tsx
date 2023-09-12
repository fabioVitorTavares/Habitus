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

  type TMapIndexDays = { [key: number]: Date[] };

  const mapIndexDays: TMapIndexDays = {
    0: [currentDate, nextDate(), previousDate()],
    1: [previousDate(), currentDate, nextDate()],
    2: [nextDate(), previousDate(), currentDate],
  };

  const [indexCarousel, setIndexCarousel] = useState<number>(0);

  useEffect(() => {
    setPrevCurrentNextDay(mapIndexDays[indexCarousel]);
  }, [indexCarousel]);

  function changeIndexCarousel(index: number) {
    setIndexCarousel((p) => {
      if (p === 0) {
        if (index === 1) {
          nextDay();
        } else {
          previousDay();
        }
      } else if (p === 1) {
        if (index === 0) {
          previousDay();
        } else {
          nextDay();
        }
      } else {
        if (index === 0) {
          nextDay();
        } else {
          previousDay();
        }
      }
      return index;
    });
  }

  return (
    <View style={styles.caledarContainer}>
      <Carousel
        width={250}
        height={100}
        loop
        data={prevCurrentNextDay}
        scrollAnimationDuration={100}
        onSnapToItem={changeIndexCarousel}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>
              {prevCurrentNextDay[index].toLocaleDateString("pt-BR", {
                month: "numeric",
                year: "numeric",
                day: "numeric",
              })}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
