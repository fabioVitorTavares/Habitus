import { Ionicons } from "@expo/vector-icons";
import { OpaqueColorValue } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type IconProps = {
  color?: string | OpaqueColorValue | undefined;
  size?: number | undefined;
};

export const IconConfigs = ({ color, size }: IconProps) => (
  <Ionicons name="settings-sharp" color={color} size={size} />
);

export const IconHome = ({ color, size }: IconProps) => (
  <Ionicons name="ios-home-sharp" color={color} size={size} />
);

export const IconHabitos = ({ color, size }: IconProps) => (
  <MaterialIcons name="featured-play-list" color={color} size={size} />
);

export const IconAddNewHabitos = ({ color, size }: IconProps) => (
  <MaterialCommunityIcons name="plus-box" color={color} size={size} />
);
