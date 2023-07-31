import { Dispatch, SetStateAction } from "react";
import { OpaqueColorValue } from "react-native";

export type setStateType = {
  setState: Dispatch<SetStateAction<string>>;
};

export type SibolTouchType = {
  opt: string | number;
};

export type IconProps = {
  color?: string | OpaqueColorValue | undefined;
  size?: number | undefined;
};

export type CardPropsType = {
  Icon: ({ color, size }: IconProps) => JSX.Element;
  text: string;
  link: "Habitos" | "AddNewHabito" | "Configs";
};