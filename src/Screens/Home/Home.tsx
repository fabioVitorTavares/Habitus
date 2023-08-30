import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
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

import { useContext, useState } from "react";
import DynamicList from "../../Components/DynamicList/DynamicList";
import * as ImagePicker from "expo-image-picker";
import { AppContext } from "../../Context/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [optionsNewPhoto, setOptionsNewPhoto] = useState(false);

  const { setPerfilPhotoUri, perfilPhotoUri } = useContext(AppContext);
  const [photoUri, setPhotoUri] = useState<string>(perfilPhotoUri);

  const [permissionsLibrary, requestPermission] =
    ImagePicker.useMediaLibraryPermissions();

  async function verifyPermission() {
    if (!permissionsLibrary?.granted) {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    }
  }

  async function openCamera() {
    verifyPermission();
    if (permissionsLibrary?.granted) {
      const { assets } = await ImagePicker.launchCameraAsync();
      if (assets) {
        setPhotoUri(assets[0]?.uri);
        setOptionsVisible(false);
        setOptionsNewPhoto(true);
      }
    }
  }

  async function pickerPhoto() {
    if (permissionsLibrary?.granted) {
      const { assets } = await ImagePicker.launchImageLibraryAsync();
      if (assets) {
        setPhotoUri(assets[0]?.uri);
        setOptionsVisible(false);
        setOptionsNewPhoto(true);
      }
    }
  }

  function hadlePressAlterPhoto() {
    setOptionsVisible(true);
  }

  function closeOptions() {
    setOptionsVisible(false);
  }

  function cancelar() {
    setPhotoUri("");
    setOptionsVisible(true);
    setOptionsNewPhoto(false);
  }

  async function savePhotoUriCache(uri: string) {
    await AsyncStorage.setItem("perfilPhotoUri", uri);
  }

  function salvar() {
    setPerfilPhotoUri(photoUri);
    const uri = JSON.stringify(photoUri);
    savePhotoUriCache(uri);
    closeModal();
  }

  function closeModal() {
    setOptionsVisible(false);
    setOptionsNewPhoto(false);
    close();
  }

  return (
    <>
      {isOpen && (
        <TouchableOpacity onPress={closeModal} style={{ ...styles.modal }}>
          <Pressable style={styles.modalContainer} onPress={closeOptions}>
            {photoUri && (
              <Image
                source={{
                  uri: photoUri as string,
                }}
                style={styles.avatarModal}
              />
            )}
            {!photoUri && <View style={styles.avatarModal} />}
            <View style={styles.optionsContainer}>
              {!optionsVisible && !optionsNewPhoto && (
                <TouchableOpacity onPress={close}>
                  <Text style={styles.textAlterPhoto}>Cancelar</Text>
                </TouchableOpacity>
              )}
              {!optionsVisible && !optionsNewPhoto && (
                <TouchableOpacity onPress={hadlePressAlterPhoto}>
                  <Text style={styles.textAlterPhoto}>Alterar foto</Text>
                </TouchableOpacity>
              )}

              {optionsVisible && (
                <TouchableOpacity onPress={pickerPhoto}>
                  <Text style={styles.textAlterPhoto}>Galeria</Text>
                </TouchableOpacity>
              )}
              {optionsVisible && (
                <TouchableOpacity onPress={openCamera}>
                  <Text style={styles.textAlterPhoto}>Camera</Text>
                </TouchableOpacity>
              )}
              {optionsNewPhoto && (
                <TouchableOpacity onPress={cancelar}>
                  <Text style={styles.textAlterPhoto}>Cancelar</Text>
                </TouchableOpacity>
              )}
              {optionsNewPhoto && (
                <TouchableOpacity onPress={salvar}>
                  <Text style={styles.textAlterPhoto}>Salvar</Text>
                </TouchableOpacity>
              )}
            </View>
          </Pressable>
        </TouchableOpacity>
      )}
    </>
  );
}

export default function Home() {
  const { perfilPhotoUri } = useContext(AppContext);
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
              {perfilPhotoUri && (
                <Image
                  source={{
                    uri: perfilPhotoUri,
                  }}
                  style={styles.avatar}
                />
              )}
              {!perfilPhotoUri && <View style={styles.avatar} />}
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
