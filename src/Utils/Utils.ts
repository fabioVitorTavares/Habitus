import { HabitoT } from "../Types/Types";

export function filterHabitosDay(habito: HabitoT, currentDate: Date) {
  return habito.days.includes(currentDate.getDay());
}