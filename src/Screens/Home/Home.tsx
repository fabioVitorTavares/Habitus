import { View, Text, FlatList, SafeAreaView, Image } from "react-native";
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
  SizeType,
} from "../../Types/Types";

const dataCards: CardPropsType[] = [
  { key: "KEY0", text: "Hábitos", link: "Habitos", Icon: IconHabitos },
  {
    key: "KEY1",
    text: "Adicionar",
    link: "AddNewHabito",
    Icon: IconAddNewHabitos,
  },
  { key: "KEY2", text: "Configurações", link: "Configs", Icon: IconConfigs },
  { key: "KEY3", text: "Hábitos", link: "Habitos", Icon: IconHabitos },
  {
    key: "KEY4",
    text: "Adicionar",
    link: "AddNewHabito",
    Icon: IconAddNewHabitos,
  },
  { key: "KEY5", text: "Configurações", link: "Configs", Icon: IconConfigs },
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

export default function Home() {
  return (
    <ScreenContainer>
      <View style={styles.homeContainer}>
        <View style={styles.headerHome}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://avatars.githubusercontent.com/u/74937496?s=96&v=4",
            }}
          />
          <Text>Usuário</Text>
        </View>
        <View style={styles.cardTopHome}></View>
        <SafeAreaView>
          <FlatList
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
            data={dataHabitos}
            ItemSeparatorComponent={() => <ItemSeparator size={10} />}
            renderItem={({
              item: { habito, key },
            }: {
              item: { habito: string; key: string };
            }) => (
              <View key={key}>
                <Text>{habito}</Text>
              </View>
            )}
          />
        </SafeAreaView>
      </View>
    </ScreenContainer>
  );
}
