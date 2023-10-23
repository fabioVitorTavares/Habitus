import { Dispatch, SetStateAction, useContext, useState } from "react";
import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AppContext } from "../../Context/AppContext";
import { styles } from "./ModalAddCategoryStyles";
import { AntDesign } from "@expo/vector-icons";

type ModalAddCategoryTypes = {
  open: boolean;
  onClose: () => void;
  setCategorySelected: Dispatch<SetStateAction<string | null>>;
};

const stylesSelected = {
  backgrounColor: "red",
};

export default function ModalAddCategory({
  setCategorySelected,
  open,
  onClose,
}: ModalAddCategoryTypes) {
  const { categories, setCategories } = useContext(AppContext);
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const dataFlatList = categories?.sort(fnSort)?.map((category, index) => {
    return (
      <TouchableOpacity
        key={category}
        style={{
          ...styles.categoryItem,
          backgroundColor: category === selectedCategory ? "red" : undefined,
        }}
        onPress={() => {
          setSelectedCategory(category);
        }}
      >
        <Text>{category}</Text>
      </TouchableOpacity>
    );
  });

  dataFlatList?.unshift(
    <View style={{ position: "relative" }}>
      <TextInput
        key={`firstItemFlatList`}
        placeholder="Nova categoria"
        style={styles.textInput}
        value={newCategory}
        onChangeText={(text) => setNewCategory(text)}
      />
      {!!newCategory && (
        <TouchableOpacity
          onPress={handlePressAddCategory}
          style={styles.iconPlus}
        >
          <AntDesign name="pluscircle" size={32} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );

  function handlePressItemFlatList(category: string) {
    console.log("[56]: >>>", categories);
  }

  function closeModal() {
    setSelectedCategory(null);
    setNewCategory("");
    onClose();
  }

  function fnSort(a: string, b: string) {
    return a > b ? 1 : -1;
  }

  function handlePressAddCategory() {
    if (setCategories) {
      setCategories((prev) => [...prev, newCategory]);
      setNewCategory("");
    }
  }

  return open ? (
    <View
      style={{
        position: "absolute",
        backgroundColor: "#0000",
        width: "100%",
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={closeModal}>
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
              style={{ marginBottom: 20 }}
            />
            <Button
              title="Confirmar"
              disabled={!selectedCategory}
              onPress={() => {
                setCategorySelected(selectedCategory);
                closeModal();
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  ) : null;
}
