import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
  screen,
  textInput,
  containerInputs,
  text,
  daysWeek,
} from "./AddNewHabitoStyles";
import React, { useContext, useEffect, useState } from "react";
import CheckBox from "../../Components/CheckBox/CheckBox";
import { AppContext } from "../../Context/AppContext";
import ModalAddCategory from "../../Components/ModalAddCategory/ModalAddCategory";

export default function AddNewHabito() {
  const { categories, setCategories, categorySelected, setCategorySelected } =
    useContext(AppContext);
  const [checkAllDays, setCheckAllDays] = useState(false);

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

  return (
    <View style={screen}>
      <ModalAddCategory
        open={modalAddCategoryIsOpen}
        onClose={() => setModalAddCategoryIsOpen(false)}
      />
      <Picker
        selectedValue={categorySelected}
        style={{ height: 50, width: 150 }}
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
        <Text>+</Text>
      </TouchableOpacity>
      <View style={containerInputs}>
        <Text style={text}>Novo hábito:</Text>
        <TextInput style={textInput} />
      </View>
      <View style={containerInputs}>
        <Text style={text}>Breve descrição:</Text>
        <TextInput style={textInput} />
      </View>
      <View style={containerInputs}>
        <Text style={text}>Dias:</Text>
        <Text style={text}>Todos</Text>
        <CheckBox
          checked={checkAllDays}
          setChecked={() => pressCheckAllDays()}
        />
        <View style={daysWeek}>
          {checkDays.map((day, index) => {
            return (
              <View key={index}>
                <Text style={text}>{day.name}</Text>
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
  );
}
