import { useContext, useState } from "react";
import {
  Button,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AppContext } from "../../Context/AppContext";
import { styles } from "./ModalAddCategoryStyles";

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
    open && (
      <View
        style={{
          position: "absolute",
          backgroundColor: "#0000",
          width: "100%",
          height: "100%",
        }}
      >
        <TouchableOpacity onPress={() => handlePressClose()}>
          <View style={styles.modalContainer}>
            <View
              style={styles.modalContent}
              onStartShouldSetResponder={(event) => true}
              onTouchEnd={(e) => e.stopPropagation()}
            >
              <View style={styles.containerInputs}>
                <Text style={styles.text}>Nova categoria:</Text>
                <TextInput
                  placeholder="categoria"
                  style={styles.textInput}
                  value={newCategory}
                  onChangeText={(text) => setNewCategory(text)}
                />
              </View>
              <View style={styles.buttonsContainer}>
                <Button title="Cancelar" onPress={handlePressClose} />
                <Button title="Adicionar" onPress={handlePressAdd} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  );
}
