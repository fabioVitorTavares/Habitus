import { Pressable, Text, View } from "react-native";
import { CalendarProps } from "../../Types/Types";
import { styles } from "./CalendarStyles";
import Carousel from "react-native-reanimated-carousel";
import { Children, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const ONE_DAY_IN_MS = 86400000;
export default function Calendar({
  currentDate,
  setCurrentDate,
}: CalendarProps) {
  const [prevCurrentNextDay, setPrevCurrentNextDay] = useState<Date[]>([]);
  const [daysOfMonth, setDaysOfMonth] = useState<(Date | null)[]>([]);

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
    console.log("Log line 51: ", index);
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

  useEffect(() => {
    const firstDayofMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth()
    );
    const positionFirstDayofMonth = firstDayofMonth.getDay();

    const daysOfCurrentMonth: (Date | null)[] = new Array(35)
      .fill(null)
      .map((item, index) => {
        if (index === positionFirstDayofMonth) {
          return firstDayofMonth;
        }
        if (index > positionFirstDayofMonth) {
          const date = new Date(
            firstDayofMonth.getTime() +
              (index - positionFirstDayofMonth) * ONE_DAY_IN_MS
          );
          if (date.getMonth() > firstDayofMonth.getMonth()) {
            return null;
          }
          return date;
        }
        return null;
      });

    setDaysOfMonth(daysOfCurrentMonth);
  }, [currentDate]);

  return (
    <View style={styles.caledarContainer}>
      <View style={styles.dayTouchsContainer}>
        {daysOfMonth.map((d, i) => {
          return d ? (
            <TouchableOpacity
              style={styles.dayTouch}
              onPress={() => setCurrentDate(d as Date)}
              key={i}
            >
              <Text
                style={[
                  styles.dayTouchText,
                  d?.getDate() == currentDate.getDate() && styles.currentDay,
                ]}
              >
                {d?.getDate()}
              </Text>
            </TouchableOpacity>
          ) : (
            <View key={i} style={styles.dayVoid} />
          );
        })}
      </View>
      <Carousel
        width={250}
        height={100}
        loop
        data={prevCurrentNextDay}
        scrollAnimationDuration={100}
        onSnapToItem={changeIndexCarousel}
        renderItem={({ index }) => (
          <View style={styles.dateCarouselContainer}>
            <Text style={styles.dateCarousel}>
              {currentDate.toLocaleDateString("pt-BR", {
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
