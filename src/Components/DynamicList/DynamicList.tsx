import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./DynamicListStyles";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
  TapGestureHandler,
} from "react-native-gesture-handler";

export default function DynamicList<T>({
  data,
  RenderItens,
}: {
  data: T[];
  RenderItens: ({ item }: { item: T }) => JSX.Element;
}) {
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  function RenderItensList({ item }: { item: T }) {
    const translateY = useSharedValue(0);

    const containerStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: translateY.value,
          },
        ],
      };
    });

    const onDrag = useAnimatedGestureHandler<
      GestureEvent<PanGestureHandlerEventPayload>,
      Record<string, number>
    >({
      onStart: (event, context) => {
        context.translateY = translateY.value;
      },
      onActive: (event, context) => {
        translateY.value = event.translationY + context.translateY;
      },
      onEnd: (event, context) => {
        const rest = (event.translationY + context.translateY) % 60;
        const cont = ((event.translationY + context.translateY) / 60) | 0;
        translateY.value =
          rest > 0
            ? rest > 30
              ? (cont + 1) * 60
              : cont * 60
            : rest < -30
            ? (cont - 1) * 60
            : cont * 60;
      },
    });

    return (
      <PanGestureHandler onGestureEvent={onDrag} activateAfterLongPress={500}>
        <AnimatedTouchable style={[containerStyle]}>
          {/* <TapGestureHandler> */}
          <RenderItens item={item} />
          {/* </TapGestureHandler> */}
        </AnimatedTouchable>
      </PanGestureHandler>
    );
  }

  //   const refFlatListHabitos = useRef<
  //   FlatList<{ habito: string; key: string }> &
  //     Readonly<FlatListProps<{ habito: string; key: string }>>
  // >(null);

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.flatListHabitos}
        showsVerticalScrollIndicator={false}
      >
        {data.map((item, index) => {
          return <RenderItensList item={item} key={index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
