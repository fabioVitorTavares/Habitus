import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  FlatListProps,
  ScrollView,
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
import DynamicList from "../../Components/DynamicList/DynamicList";

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

function ItemListHabitos({
  item: { habito, key },
}: RenderItemListHabitosProps) {
  return (
    <View key={key} style={styles.itemListHabitos}>
      <Text>{habito}</Text>
    </View>
  );
}

export default function Home() {
  const refFlatListHabitos = useRef<
    FlatList<{ habito: string; key: string }> &
      Readonly<FlatListProps<{ habito: string; key: string }>>
  >(null);

  return (
    <ScreenContainer>
      <View style={styles.homeContainer}>
        <View style={styles.headerHome}>
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
        <DynamicList data={dataHabitos} RenderItens={ItemListHabitos} />
      </View>
    </ScreenContainer>
  );
}
