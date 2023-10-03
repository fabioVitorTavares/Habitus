import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./CardHomeStyles";
import { CardPropsType, IconProps } from "../../Types/Types";

export default function CardHome({
  Icon,
  title,
  description,
  link,
}: CardPropsType) {
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
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}
