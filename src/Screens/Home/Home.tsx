import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  FlatListProps,
} from "react-native";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";
import CardHome from "../../Components/CardHome/CardHome";
import { styles } from "./HomeStyles";
import {
  IconAddNewHabitos,
  IconConfigs,
  IconHabitos,
} from "../../Icons/Incons";
import {
  CardPropsType,
  HabitoKeyStringType,
  RendeItensCardHomeProp,
  RenderItemListHabitosProps,
  SizeType,
} from "../../Types/Types";
import {
  GestureEvent,
  GestureEventPayload,
  GestureHandlerGestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
  TapGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
  GestureHandlers,
} from "react-native-reanimated";
import { Context } from "react-native-reanimated/lib/types/lib/reanimated2/hook/commonTypes";
import { HandlerCallbacks } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gesture";
import { LegacyRef, RefObject, useEffect, useRef, useState } from "react";

const sizeIconsCard = 50;
const dataCards: CardPropsType[] = [
  {
    key: "KEY0",
    text: "Hábitos",
    link: "Habitos",
    Icon: () => <IconHabitos color={"#006EFF"} size={sizeIconsCard} />,
  },
  {
    key: "KEY1",
    text: "Adicionar",
    link: "AddNewHabito",
    Icon: () => <IconAddNewHabitos color={"#2DB124"} size={sizeIconsCard} />,
  },
  {
    key: "KEY2",
    text: "Configurações",
    link: "Configs",
    Icon: () => <IconConfigs color={"#9C00AE"} size={sizeIconsCard} />,
  },
  {
    key: "KEY3",
    text: "Hábitos",
    link: "Habitos",
    Icon: () => <IconHabitos color={"#006EFF"} size={sizeIconsCard} />,
  },
  {
    key: "KEY4",
    text: "Adicionar",
    link: "AddNewHabito",
    Icon: () => <IconAddNewHabitos color={"#2DB124"} size={sizeIconsCard} />,
  },
  {
    key: "KEY5",
    text: "Configurações",
    link: "Configs",
    Icon: () => <IconConfigs color={"#9C00AE"} size={sizeIconsCard} />,
  },
];

const dataHabitos = new Array(100).fill(null).map((i, id) => {
  return { habito: `Hábito numero ${id}`, key: `KEY${id}` };
});

function ItemSeparator({ size }: SizeType) {
  return (
    <View
      style={{
        width: size,
        height: size,
      }}
    />
  );
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

function ItemListHabitos({ habito, pkey }: { habito: string; pkey: string }) {
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
    onEnd: async (event, context) => {
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
    <PanGestureHandler onGestureEvent={onDrag} activateAfterLongPress={1000}>
      <AnimatedTouchable style={[containerStyle, styles.itemListHabitos]}>
        <TapGestureHandler>
          <View style={styles.itemListHabitos}>
            <Text>{habito}</Text>
          </View>
        </TapGestureHandler>
      </AnimatedTouchable>
    </PanGestureHandler>
  );
}

export default function Home() {
  const refFlatListHabitos = useRef<
    FlatList<{ habito: string; key: string }> &
      Readonly<FlatListProps<{ habito: string; key: string }>>
  >(null);

  function renderItemListHabitos({
    item: { habito, key },
  }: RenderItemListHabitosProps) {
    return <ItemListHabitos habito={habito} pkey={key} key={key} />;
  }

  useEffect(() => {
    console.log("Log line 158: ");
  }, [refFlatListHabitos.current]);

  return (
    <ScreenContainer>
      <View style={styles.homeContainer}>
        <View style={styles.headerHome}>
          {/* <Image
            style={styles.avatar}
            source={{
              uri: "https://avatars.githubusercontent.com/u/74937496?s=96&v=4",
            }}
          /> */}
          <Text>Usuário</Text>
        </View>
        <View style={styles.cardTopHome}></View>
        <SafeAreaView>
          <FlatList
            style={{
              padding: 20,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dataCards}
            ItemSeparatorComponent={() => <ItemSeparator size={20} />}
            renderItem={({
              item: { text, link, Icon, key },
            }: RendeItensCardHomeProp) => (
              <CardHome text={text} link={link} Icon={Icon} key={key} />
            )}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.habitosList}>
          <FlatList
            ref={refFlatListHabitos}
            style={styles.flatListHabitos}
            data={dataHabitos}
            ItemSeparatorComponent={() => <ItemSeparator size={10} />}
            renderItem={renderItemListHabitos}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      </View>
    </ScreenContainer>
  );
}
