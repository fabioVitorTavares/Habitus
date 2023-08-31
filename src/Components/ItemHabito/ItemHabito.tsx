import { useRef } from "react";
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
};

export default function ItemHabito({ description }: ItemHabitoProps) {
  const AnimatedTouchable = Animated.createAnimatedComponent(View);
  const opacityActive = useRef<SharedValue<number>>(useSharedValue(1))?.current;
  const opacityTrashIcon = useRef<SharedValue<number>>(
    useSharedValue(0)
  )?.current;
  const translateX = useRef<SharedValue<number>>(useSharedValue(0))?.current;

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
      opacity: opacityActive?.value,
    };
  });

  const onDrag = useAnimatedGestureHandler<
    GestureEvent<PanGestureHandlerEventPayload>,
    Record<string, number>
  >({
    onStart: (event, context) => {
      translateX.value = 0;
      opacityTrashIcon.value = 0;
    },
    onActive: (event, context) => {},
    onEnd: (event) => {
      if (event?.translationX < -100) {
        translateX.value = -75;
        opacityTrashIcon.value = 1;
      }
    },
  });

  function handleAnimateActive() {
    opacityActive.value = 0.5;
  }
  function handleAnimateInactive() {
    opacityActive.value = 1;
  }

  return (
    <PanGestureHandler
      onGestureEvent={onDrag}
      onActivated={handleAnimateActive}
      onEnded={handleAnimateInactive}
      activateAfterLongPress={500}
    >
      <AnimatedTouchable style={[styles.cardList, containerStyle]}>
        <Text style={styles.description}> {description}</Text>
        <View style={[styles.trashIcon, { opacity: opacityTrashIcon.value }]}>
          <TouchableOpacity>
            <TrashIcon name="trash" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </AnimatedTouchable>
    </PanGestureHandler>
  );
}
