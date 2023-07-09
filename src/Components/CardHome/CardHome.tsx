import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStackParamList } from "../../Routes/Routes";
import { styles } from "./CardHomeStyles";

type CardPropsType = {
  icon?: JSX.Element;
  text: string;
  link: "Habitos" | "AddNewHabito";
};

export default function CardHome({ icon, text, link }: CardPropsType) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(link)}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
