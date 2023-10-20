import { Text, View } from "react-native";
import CheckBox from "../CheckBox/CheckBox";
import { Dispatch, SetStateAction } from "react";
import { styles } from "./WeekDayCheckStyles";

export type TDay = {
  day: {
    name: string;
    check: [boolean, Dispatch<SetStateAction<boolean>>];
  };
};

export default function WeekDayCheck({ day }: TDay) {
  const { name } = day;
  const {
    check: [check, setCheck],
  } = day;
  return (
    <View style={styles.weekDayCheckContainer} key={name}>
      <Text style={styles.dayName}>{name}</Text>
      <CheckBox checked={check} setChecked={() => setCheck((prev) => !prev)} />
    </View>
  );
}
