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
  TapGestureHandler,
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
};

function RenderItensList<T>({
  item,
  RenderItens,
  translateYSharedValue,
  index,
  allTranslateSharedValues,
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

  const onDrag = useAnimatedGestureHandler<
    GestureEvent<PanGestureHandlerEventPayload>,
    Record<string, number>
  >({
    onStart: (event, context) => {
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      if (
        event.translationY > 40 &&
        allTranslateSharedValues[index + 1].value === 0
      ) {
        allTranslateSharedValues[index + 1].value -= 60;
      }
      if (
        event.translationY < -40 &&
        allTranslateSharedValues[index - 1].value === 0
      ) {
        allTranslateSharedValues[index - 1].value += 60;
      }
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
  data.map((item, index) => translatesYs.current.push(useSharedValue(0)));

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
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
