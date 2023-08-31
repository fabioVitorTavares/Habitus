import { useEffect, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import Animated, {
  SharedValue,
  event,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { styles } from "./ItemHabitoStyles";
import { FontAwesome5 as TrashIcon } from "@expo/vector-icons";

type ItemHabitoProps = {
  description: string;
  deleteItem: (i: number) => void;
  index: number;
};

export default function ItemHabito({
  description,
  index,
  deleteItem,
}: ItemHabitoProps) {
  const AnimatedTouchable = Animated.createAnimatedComponent(View);
  const translateX = useRef<SharedValue<number>>(useSharedValue(0))?.current;

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  const onDrag = useAnimatedGestureHandler<
    GestureEvent<PanGestureHandlerEventPayload>,
    Record<string, number>
  >({
    onStart: (event, context) => {
      translateX.value = 0;
    },
    onActive: (event, context) => {
      translateX.value = -75;
    },
  });

  function deleteCurrentItem() {
    translateX.value = 0;
    deleteItem(index);
  }

  return (
    <View style={styles.itemContainer}>
      <PanGestureHandler onGestureEvent={onDrag} activeOffsetX={-50}>
        <AnimatedTouchable style={[styles.cardList, containerStyle]}>
          <Text style={styles.description}> {description}</Text>
        </AnimatedTouchable>
      </PanGestureHandler>

      <TouchableOpacity style={styles.trashIcon} onPress={deleteCurrentItem}>
        <TrashIcon name="trash" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}
