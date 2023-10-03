import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
  BackHandler,
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
  RendeItensCardHomeProp,
  RenderItemListHabitosProps,
  SizeType,
} from "../../Types/Types";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Device from "expo-device";
import CardResume from "../../Components/CardResume/CardResume";
import UserAvatar from "../../Components/UserAvatar/UserAvatar";
import { useNavigation } from "@react-navigation/native";

const sizeIconsCard = 50;
const cards: CardPropsType[] = [
  {
    key: "KEY0",
    title: "Hábitos",
    description: "Veja seus hábitos e sua agenda",
    link: "Habitos",
    Icon: () => <IconHabitos color={"#000"} size={sizeIconsCard} />,
  },
  {
    key: "KEY1",
    title: "Adicionar",
    description: "Adicione novos hábitos à sua lista",
    link: "AddNewHabito",
    Icon: () => <IconAddNewHabitos color={"#000"} size={sizeIconsCard} />,
  },
  {
    key: "KEY2",
    title: "Configurações",
    description: "Configure o app do seu jeito",
    link: "Configs",
    Icon: () => <IconConfigs color={"#000"} size={sizeIconsCard} />,
  },
];

export default function Home() {
  const navigation = useNavigation();
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (navigation.canGoBack()) {
          navigation.goBack();
        }
        return null;
      }
    );

    return () => backHandler.remove();
  }, []);

  return (
    <ScreenContainer>
      <View style={styles.homeContainer}>
        <UserAvatar />
        <CardResume />
        <View style={styles.cardsContainer}>
          {cards.map(({ Icon, key, link, title, description }) => {
            return (
              <CardHome
                Icon={Icon}
                key={key}
                link={link}
                title={title}
                description={description}
              />
            );
          })}
        </View>
      </View>
    </ScreenContainer>
  );
}
