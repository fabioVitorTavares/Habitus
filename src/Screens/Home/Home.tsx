import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal,
  ModalProps,
  Touchable,
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
  SizeType,
} from "../../Types/Types";

import { Context } from "react-native-reanimated/lib/types/lib/reanimated2/hook/commonTypes";
import { HandlerCallbacks } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gesture";
import {
  LegacyRef,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import DynamicList from "../../Components/DynamicList/DynamicList";
import { AppContext } from "../../Context/AppContext";

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

type ModalPickerPhotoProps = {
  isOpen: boolean;
  close: () => void;
};

function ModalPickerPhoto({ isOpen, close }: ModalPickerPhotoProps) {
  return (
    <>
      {isOpen && (
        <TouchableOpacity onPress={close} style={{ ...styles.modal }}>
          <Image
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
            style={styles.avatar}
          />
          <Text>Modal</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

export default function Home() {
  const [modalPickerPhotoVisible, setModalPickerPhotoVisible] = useState(false);

  function closeModalPickerPhoto() {
    setModalPickerPhotoVisible(false);
  }

  function openModalPickerPhoto() {
    setModalPickerPhotoVisible(true);
  }

  function handlePressAvatar() {
    openModalPickerPhoto();
  }

  return (
    <ScreenContainer>
      <>
        <ModalPickerPhoto
          isOpen={modalPickerPhotoVisible}
          close={closeModalPickerPhoto}
        />
        <View style={styles.homeContainer}>
          <View style={styles.headerHome}>
            <TouchableOpacity onPress={handlePressAvatar}>
              <Image
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
                style={styles.avatar}
              />
            </TouchableOpacity>
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
          {/* <DynamicList data={dataHabitos} RenderItens={ItemListHabitos} /> */}
        </View>
      </>
    </ScreenContainer>
  );
}
