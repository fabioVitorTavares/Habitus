import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStackParamList } from "../../Routes/Routes";
import { styles } from "./CardHomeStyles";
import { CardPropsType, IconProps } from "../../Types/Types";

export default function CardHome({ Icon, text, link }: CardPropsType) {
  const navigation = useNavigation();

  function IconCard({ color, size }: IconProps) {
    return Icon({ color, size });
  }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(link)}
    >
      <IconCard />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
