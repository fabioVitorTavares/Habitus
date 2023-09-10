import { Pressable, Text, View } from "react-native";
import { CalendarProps } from "../../Types/Types";
import { styles } from "./CalendarStyles";
import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useAnimatedGestureHandler } from "react-native-reanimated";
const ONE_DAY_IN_MS = 86400000;
export default function Calendar({
  currentDate,
  setCurrentDate,
}: CalendarProps) {
  function nextDay() {
    setCurrentDate((p) => new Date(p.getTime() + ONE_DAY_IN_MS));
  }
  function previousDay() {
    setCurrentDate((p) => new Date(p.getTime() - ONE_DAY_IN_MS));
  }

  const onDrag = useAnimatedGestureHandler<
    GestureEvent<PanGestureHandlerEventPayload>,
    Record<string, number>
  >({
    onStart: (event, context) => {
      console.log("Log line 28: ", event);
    },
    onActive: (event, context) => {},
  });

  return (
    <View style={styles.caledarContainer}>
      <PanGestureHandler onGestureEvent={onDrag} activeOffsetX={-50}>
        <Text>{currentDate.toLocaleDateString()}</Text>
        {/* <TouchableOpacity onPress={nextDay}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={previousDay}>
          <Text>-</Text>
        </TouchableOpacity> */}
      </PanGestureHandler>
    </View>
  );
}
