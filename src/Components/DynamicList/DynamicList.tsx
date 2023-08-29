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
  translatesYs: SharedValue<number>;
};
type RenderItensListT<T> = {
  item: T;
  RenderItens: ({ item }: { item: T }) => JSX.Element;
  index: number;
  allTranslateSharedValues: SharedValue<number>[];
  infoItens: infoItensType[];
};

function RenderItensList<T>({
  item,
  RenderItens,
  index,
  infoItens,
}: RenderItensListT<T>) {
  const AnimatedTouchable = Animated.createAnimatedComponent(View);
  const translateY = infoItens[index].translatesYs;
  const opacityActive = useRef<SharedValue<number>>(useSharedValue(1))?.current;

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
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
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      const heightComponent = 60;
      const current = infoItens[index] as infoItensType;

      const next = infoItens.find(
        (item) => item.currentIndex.value === current.currentIndex.value + 1
      ) as infoItensType;

      const prev = infoItens.find(
        (item) => item.currentIndex.value === current.currentIndex.value - 1
      ) as infoItensType;

      const yPrev = prev?.absolutePosition?.value + prev?.translatesYs?.value;
      const yCurrent =
        current?.absolutePosition?.value + current?.translatesYs?.value;
      const yNext = next?.absolutePosition?.value + next?.translatesYs?.value;

      // console.log(prev, "\n", current, "\n", next);

      if (next) {
        if (yCurrent + 30 > yNext) {
          next.translatesYs.value -= heightComponent;
          next.currentIndex.value -= 1;

          current.currentIndex.value += 1;
        }
      }
      if (prev) {
        if (yCurrent - 30 < yPrev) {
          prev.translatesYs.value += heightComponent;
          prev.currentIndex.value += 1;

          current.currentIndex.value -= 1;
        }
      }
      console.log("Log line 98: ", event.absoluteY);
      if (event.absoluteY > 370) {
        translateY.value = event.translationY + context.translateY;
      }
    },
    onEnd: (event, context) => {
      const rest = translateY.value % 60;
      const cont = (translateY.value / 60) | 0;
      if (event.absoluteY > 370) {
        translateY.value =
          rest > 0
            ? rest > 30
              ? (cont + 1) * 60
              : cont * 60
            : rest < -30
            ? (cont - 1) * 60
            : cont * 60;
      } else {
        translateY.value = cont * 60;
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
      activateAfterLongPress={500}
      onActivated={handleAnimateActive}
      onEnded={handleAnimateInactive}
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

  const infoItens = useRef<infoItensType[]>(
    translatesYs.current.map((item, index) => {
      return {
        currentIndex: useSharedValue(index),
        absolutePosition: useSharedValue(index * 60),
        translatesYs: translatesYs.current[index],
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
