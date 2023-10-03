import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { ModalPickerPhotoProps } from "../../Types/Types";
import React from "react";
import { styles } from "./UserAvatarStyles";

export default function UserAvatar() {
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
    <>
      <View style={styles.userAvatarContainer}>
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
      <ModalPickerPhoto
        isOpen={modalPickerPhotoVisible}
        close={closeModalPickerPhoto}
      />
    </>
  );
}
