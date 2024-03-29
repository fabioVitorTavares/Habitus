import React, { useContext, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import { styles } from "./AddNewHabitoStyles";
import { AppContext } from "../../Context/AppContext";
import CheckBox from "../../Components/CheckBox/CheckBox";
import ModalAddCategory from "../../Components/ModalAddCategory/ModalAddCategory";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";
import { saveHabito } from "../../FileSystem/FileSystem";
import WeekDayCheck from "../../Components/WeekDayCheck/WeekDayCheck";
import { useNavigation } from "@react-navigation/native";
import Button from "../../Components/Button/Button";
import GoBack from "../../Components/GoBack/GoBack";
import { ToastAlert } from "../../Components/Toast/ToastAlert";
import Toast from "react-native-toast-message";
import { TToast, TToastOption } from "../../Types/Types";

const toastOption: TToastOption = {
  success: {
    type: "success",
    text1: "Parabéns!",
    text2: "Novo hábito adicionado com sucesso!",
  },
  error: {
    type: "error",
    text1: "Algo está errado!",
    text2: "Verifique se os campos foram preenchidos corretamente",
  },
};

export default function AddNewHabito() {
  const { setHabitos, categories, setCategories } = useContext(AppContext);
  const [checkAllDays, setCheckAllDays] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [modalAddCategoryIsOpen, setModalAddCategoryIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [categorySelected, setCategorySelected] = useState<string | null>("");

  const checkDays = [
    {
      name: "Dom",
      check: useState(false),
    },
    {
      name: "Seg",
      check: useState(false),
    },
    {
      name: "Ter",
      check: useState(false),
    },
    {
      name: "Qua",
      check: useState(false),
    },
    {
      name: "Qui",
      check: useState(false),
    },
    {
      name: "Sex",
      check: useState(false),
    },
    {
      name: "Sab",
      check: useState(false),
    },
  ];

  function pressCheckAllDays() {
    setCheckAllDays((prev) => !prev);
    checkDays.forEach((day) => {
      day.check[1](!checkAllDays);
    });
  }

  useEffect(() => {
    setCheckAllDays(!checkDays.find((day) => day.check[0] === false));
  }, [checkDays]);

  function getDays() {
    return checkDays
      .map(({ check }, index) => {
        if (check[0]) {
          return index;
        }
        return NaN;
      })
      .filter((n: number) => !isNaN(n));
  }

  function showToast() {
    Toast.show(toastOption.error);
  }
  async function onPressSalvar() {
    showToast();
    // console.log({
    //   title,
    //   description,
    //   createdDate: new Date(),
    //   days: getDays(),
    // });
    // const newsHabitos = await saveHabito({
    //   uuid: "",
    //   title,
    //   description,
    //   createdDate: new Date(),
    //   days: getDays(),
    // });
    // if (setHabitos && newsHabitos) {
    //   setHabitos(newsHabitos);
    // }
  }

  function PickerCategory() {
    return (
      <View style={styles.pickerContainer}>
        <TouchableOpacity
          style={styles.addCategory}
          onPress={() => setModalAddCategoryIsOpen(true)}
        >
          {!!categorySelected && <Text>{categorySelected}</Text>}
          {!categorySelected && (
            <Text>
              {!!categories?.length ? "Selecionar" : "Adicionar"} categoria
            </Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScreenContainer>
      <>
        <ToastAlert />
        <View style={styles.screen}>
          <GoBack />
          <View style={styles.buttonsContainer}>
            <Button onPress={onPressSalvar}>
              <View style={styles.buttonSave}>
                <Text style={styles.textButton}>Salvar</Text>
              </View>
            </Button>

            {/* <Button title="Salvar" onPress={onPressSalvar} /> */}
          </View>
          <View style={styles.containerInputs}>
            <Text style={styles.text}>Categoria:</Text>
            <PickerCategory />
          </View>
          <View style={styles.containerInputs}>
            <Text style={styles.text}>Novo hábito:</Text>
            <TextInput style={styles.textInput} onChangeText={setTitle} />
          </View>
          <View style={styles.containerInputs}>
            <Text style={styles.text}>Descrição:</Text>
            <TextInput style={styles.textInput} onChangeText={setDescription} />
          </View>
          <View style={styles.containerInputs}>
            <Text style={styles.text}>Dias:</Text>
            <Text style={styles.text}>Todos</Text>
            <View
              style={{
                width: 45,
                height: 70,
              }}
            >
              <CheckBox
                checked={checkAllDays}
                setChecked={() => pressCheckAllDays()}
              />
            </View>
            <View style={styles.daysWeek}>
              {checkDays.map((day) => {
                return <WeekDayCheck key={day?.name} day={day} />;
              })}
            </View>
          </View>
        </View>
        <ModalAddCategory
          setCategorySelected={setCategorySelected}
          open={modalAddCategoryIsOpen}
          onClose={() => setModalAddCategoryIsOpen(false)}
        />
      </>
    </ScreenContainer>
  );
}
