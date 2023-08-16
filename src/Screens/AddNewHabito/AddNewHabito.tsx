import React, { useContext, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./AddNewHabitoStyles";
import { AppContext } from "../../Context/AppContext";
import CheckBox from "../../Components/CheckBox/CheckBox";
import ModalAddCategory from "../../Components/ModalAddCategory/ModalAddCategory";
import { Entypo as Icon } from "@expo/vector-icons";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";
import DatePicker from "../../../node_modules/react-native-modern-datepicker";

type DataPickerProps = {
  open: boolean;
  close: () => void;
};
const BasicUsage = ({ open, close }: DataPickerProps) => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <Modal visible={open} transparent>
      <View
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DatePicker
          configs={{
            dayNames: [
              "Domingo",
              "Segunda",
              "Terça",
              "Quarta",
              "Quinta",
              "Sexta",
              "Sabado",
            ],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            monthNames: [
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ],
          }}
          minimumDate="2023/08/15"
          options={{
            mainColor: "#292167",
          }}
          onSelectedChange={(date: any) => setSelectedDate(date)}
          mode="datepicker"
          onDateChange={(date: string) => {
            console.log("Log line 31: ", date);
            setTimeout(() => {
              close();
            }, 2000);
          }}
          style={{
            width: "90%",
            borderRadius: 10,
          }}
        />
      </View>
    </Modal>
  );
};

export default function AddNewHabito() {
  const { categories, setCategories, categorySelected, setCategorySelected } =
    useContext(AppContext);
  const [checkAllDays, setCheckAllDays] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const checkDays = [
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
    {
      name: "Dom",
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

  const [modalAddCategoryIsOpen, setModalAddCategoryIsOpen] = useState(false);

  const PickerCategory = () => {
    return (
      <View style={styles.pickerContainer}>
        {categories?.length ? (
          <>
            <Picker
              selectedValue={categorySelected}
              style={styles.picker}
              onValueChange={(value, index) =>
                setCategorySelected && setCategorySelected(value)
              }
            >
              {categories &&
                categories.map((category, index) => (
                  <Picker.Item
                    key={`${category}${index}`}
                    label={category}
                    value={category}
                  />
                ))}
            </Picker>
            <TouchableOpacity onPress={() => setModalAddCategoryIsOpen(true)}>
              <Icon name="add-to-list" size={40} />
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            style={styles.addCategory}
            onPress={() => setModalAddCategoryIsOpen(true)}
          >
            <Text>Adicionar categoria</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <ScreenContainer>
      <View style={styles.screen}>
        <ModalAddCategory
          open={modalAddCategoryIsOpen}
          onClose={() => setModalAddCategoryIsOpen(false)}
        />
        <View style={styles.containerInputs}>
          <Text style={styles.text}>Categoria:</Text>
          <PickerCategory />
        </View>
        <View style={styles.containerInputs}>
          <Text style={styles.text}>Novo hábito:</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.containerInputs}>
          <Text style={styles.text}>Breve descrição:</Text>
          <TextInput style={styles.textInput} />
        </View>
        <TouchableOpacity onPress={() => setModalOpen(true)}>
          <Text>Open</Text>
        </TouchableOpacity>
        <BasicUsage open={modalOpen} close={() => setModalOpen(false)} />
        <View style={styles.containerInputs}>
          <Text style={styles.text}>Dias:</Text>
          <Text style={styles.text}>Todos</Text>
          <CheckBox
            checked={checkAllDays}
            setChecked={() => pressCheckAllDays()}
          />
          <View style={styles.daysWeek}>
            {checkDays.map((day, index) => {
              return (
                <View key={index}>
                  <Text style={styles.text}>{day.name}</Text>
                  <CheckBox
                    checked={day.check[0]}
                    setChecked={() => day.check[1]((prev) => !prev)}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
}
