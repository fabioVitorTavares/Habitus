import { AntDesign } from "@expo/vector-icons";
import { TICONS, TNamesIcons } from "../Types/Types";
import { Text, View } from "react-native";

const ICONS: TICONS = {
  goBack: <AntDesign name="swapleft" size={30} color="black" />,
};

export default function Icon({ name }: TNamesIcons) {
  return ICONS[name] ?? <></>;
}
