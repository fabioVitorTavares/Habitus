import { View, Text, TextInput } from "react-native";
import {
  screen,
  textInput,
  containerInputs,
  text,
  daysWeek,
} from "./AddNewHabitoStyles";
import React, { useEffect, useState } from "react";
import CheckBox from "../../Components/CheckBox/CheckBox";
export default function AddNewHabito() {
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

  return (
    <View style={screen}>
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
