import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ComponentType } from "../../Types/Types";

type TButton = ComponentType & {
  onPress: () => void;
};
export default function Button({ children, onPress }: TButton) {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
}
