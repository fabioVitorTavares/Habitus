import { useContext, useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  ScrollView,
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

  const dataFlatList = categories?.map((category, index) => {
    return (
      <TouchableOpacity key={index} style={styles.categoryItem}>
        <Text>{category}</Text>
      </TouchableOpacity>
    );
  });

  dataFlatList?.unshift(
    <TextInput
      key={`firstItemFlatList`}
      placeholder="Nova categoria"
      style={styles.textInput}
      value={newCategory}
      onChangeText={(text) => setNewCategory(text)}
    />
  );

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
        <TouchableOpacity onPress={() => onClose()}>
          <View style={styles.modalContainer}>
            <View
              style={styles.modalContent}
              onStartShouldSetResponder={(event) => true}
              onTouchEnd={(e) => e.stopPropagation()}
            >
              <View style={styles.containerInputs}>
                <Text style={styles.text}>
                  Selecione ou adicione uma nova categoria
                </Text>
              </View>
              <FlatList
                data={dataFlatList}
                renderItem={({ item }) => item}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  );
}
