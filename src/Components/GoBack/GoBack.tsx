import { Text, View } from "react-native";
import Button from "../Button/Button";
import { styles } from "./GoBackStayles";
import { useNavigation } from "@react-navigation/native";
import Icon from "../../Icons/Icon";

export default function GoBack() {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }
  return (
    <View style={{ position: "absolute", top: 40, left: 10 }}>
      <Button onPress={goBack}>
        <View style={styles.buttonGoBack}>
          <Icon name={"goBack"} />
        </View>
      </Button>
    </View>
  );
}
