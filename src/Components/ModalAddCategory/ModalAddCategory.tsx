import { useContext, useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AppContext } from "../../Context/AppContext";
import { text } from "../../Screens/AddNewHabito/AddNewHabitoStyles";

type ModalAddCategoryTypes = {
  open: boolean;
  onClose: () => void;
};

export default function ModalAddCategory({
  open,
  onClose,
}: ModalAddCategoryTypes) {
  const { categories, setCategories } = useContext(AppContext);
  const [newCategory, setNewCategory] = useState("");

  const handlePressAdd = () => {
    if (!!newCategory) {
      if (setCategories && categories) {
        setCategories([...categories, newCategory]);
        setNewCategory("");
      }
    }
    onClose();
  };

  const handlePressClose = () => {
    setNewCategory("");
    onClose();
  };

  return (
    <TouchableOpacity onPress={() => console.log("Log line 34: ")}>
      <Modal animationType="slide" transparent={true} visible={open}>
        <View
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0007",
          }}
        >
          <View
            style={{
              backgroundColor: "#FFF",
              width: "90%",
              height: "25%",
              borderRadius: 10,
            }}
          >
            <TouchableOpacity onPress={handlePressClose}>
              <Text>Fechar</Text>
            </TouchableOpacity>
            <View>
              <Text>Nova categoria:</Text>
              <TextInput
                value={newCategory}
                onChangeText={(text) => setNewCategory(text)}
              />
            </View>
            <TouchableOpacity onPress={handlePressAdd}>
              <Text>adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
}
