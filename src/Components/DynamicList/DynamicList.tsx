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

type infoItensType = {
  absolutePosition: SharedValue<number>;
  currentIndex: SharedValue<number>;
  translatesYsIndex: number;
};
type RenderItensListT<T> = {
  item: T;
  RenderItens: ({ item }: { item: T }) => JSX.Element;
  translateYSharedValue: SharedValue<number>;
  index: number;
  allTranslateSharedValues: SharedValue<number>[];
  infoItens: infoItensType[];
};

function RenderItensList<T>({
  item,
  RenderItens,
  translateYSharedValue,
  index,
  allTranslateSharedValues,
  infoItens,
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
      const heightComponent = 60;
      const deltaY = (event.translationY / heightComponent) | 0;
      // console.log("Log line 64: ", infoItens[index], event.translationY);

      const currentItem = infoItens.find(
        (item) => item.translatesYsIndex === index
      ) as infoItensType;

      const i = infoItens.find(
        (item) => item.currentIndex.value === currentItem.currentIndex.value + 1
      ) as infoItensType;

      if (
        event.translationY + currentItem.currentIndex.value * 60 >
        i.absolutePosition.value - 20
      ) {
        if (i) {
          allTranslateSharedValues[i.translatesYsIndex].value =
            infoItens[index].absolutePosition.value - i.absolutePosition.value;

          i.currentIndex.value -= 1;
          i.absolutePosition.value -= heightComponent;

          infoItens[index].absolutePosition.value += heightComponent;
          infoItens[index].currentIndex.value += 1;
          console.log("Log line 85: ", infoItens[index]);
          console.log("Log line 74: ", i);
        }
      }
      // if (
      //   event.translationY > deltaY * heightComponent + 40 &&
      //   allTranslateSharedValues[deltaY + 1 + index].value === 0
      // ) {
      //   allTranslateSharedValues[deltaY + 1 + index].value -= heightComponent;
      // }
      // if (
      //   event.translationY < deltaY * heightComponent - 40 &&
      //   allTranslateSharedValues[index + deltaY - 1].value === 0
      // ) {
      //   allTranslateSharedValues[index + deltaY - 1].value += heightComponent;
      // }
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
  data.map(() => translatesYs.current.push(useSharedValue(0)));

  const infoItens = useRef<infoItensType[]>(
    translatesYs.current.map((item, index) => {
      return {
        absolutePosition: useSharedValue(index * 60),
        currentIndex: useSharedValue(index),
        translatesYsIndex: index,
      };
    })
  );

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
              infoItens={infoItens.current}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
