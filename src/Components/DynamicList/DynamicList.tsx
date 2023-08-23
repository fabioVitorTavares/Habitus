import {
  Button,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";
import { styles } from "./DynamicListStyles";
import Animated, {
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { Touchable } from "react-native";

type RenderItensListT<T> = {
  item: T;
  RenderItens: ({ item }: { item: T }) => JSX.Element;
  translateYSharedValue: SharedValue<number>;
  index: number;
  allTranslateSharedValues: SharedValue<number>[];
  updating: Dispatch<SetStateAction<boolean>>;
};

function RenderItensList<T>({
  item,
  RenderItens,
  translateYSharedValue,
  index,
  allTranslateSharedValues,
  updating,
}: RenderItensListT<T>) {
  const AnimatedTouchable = Animated.createAnimatedComponent(View);
  const translateY = translateYSharedValue;

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  function updateListPositions() {
    "worklet";
    updating((p) => !p);
  }

  const onDrag = useAnimatedGestureHandler<
    GestureEvent<PanGestureHandlerEventPayload>,
    Record<string, number>
  >({
    onStart: (event, context) => {
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      const heightComponent = 60;
      const deltaY = (event.translationY / heightComponent) | 0;

      if (
        event.translationY > deltaY * heightComponent + 40 &&
        allTranslateSharedValues[deltaY + 1 + index].value === 0
      ) {
        allTranslateSharedValues[deltaY + 1 + index].value -= heightComponent;
      }
      if (
        event.translationY < deltaY * heightComponent - 40 &&
        allTranslateSharedValues[index + deltaY - 1].value === 0
      ) {
        allTranslateSharedValues[index + deltaY - 1].value += heightComponent;
      }
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: (event, context) => {
      "worklet";
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
    <PanGestureHandler
      onEnded={updateListPositions}
      onGestureEvent={onDrag}
      activateAfterLongPress={500}
    >
      <AnimatedTouchable style={[containerStyle]}>
        <RenderItens item={item} />
      </AnimatedTouchable>
    </PanGestureHandler>
  );
}

type DynamicListT<T> = {
  data: T[];
  RenderItens: ({ item }: { item: T }) => JSX.Element;
};

export default function DynamicList<T>({ data, RenderItens }: DynamicListT<T>) {
  const translatesYs = useRef<SharedValue<number>[]>([]);
  data.map(() => translatesYs.current.push(useSharedValue(0)));
  const [updating, setUpdating] = useState(false);

  function swap(index: number, value: number) {
    translatesYs.current[index].value = Number(0);
    console.log("Log line 124: ", translatesYs.current[index]);
    const dest = index + ((value / 60) | 0);
    const aux = data[dest];
    data[dest] = data[index];
    data[index] = aux;
    // const { value: auxValue } = translatesYs.current[dest];
    // if (auxValue > 0) {
    //   swap(dest, auxValue);
    // }
    console.log("Log line 132: ", index, value, translatesYs.current);
  }

  useEffect(() => {
    translatesYs.current.map((item, index) => {
      const { value } = item;
      if (value != 0) {
        swap(index, value);
      }
    });
    // console.log("Log line 142: ", translatesYs.current);
  }, [updating]);

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.dynamicList}
        showsVerticalScrollIndicator={false}
      >
        {data.map((item, index) => {
          return (
            <RenderItensList
              item={item}
              key={index}
              RenderItens={RenderItens}
              translateYSharedValue={translatesYs.current[index]}
              index={index}
              allTranslateSharedValues={translatesYs.current}
              updating={setUpdating}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
