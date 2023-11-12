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

export type NavigationTypes =  "Habitos" | "AddNewHabito" | "Configs";

export type IconType = ({ color, size }: IconProps) => JSX.Element;


export type CardPropsType = {
  title: string;
  description: string;
  link: NavigationTypes;
  Icon: IconType;
  key: string;
};

export type RendeItensCardHomeProp = {
  item: CardPropsType;
};
export type SizeType = {
  size: number;
};

export type HabitoKeyStringType = {
  habito: string;
  key: string;
}

export type RenderItemListHabitosProps = {
  item: HabitoKeyStringType;
};

export type CalendarProps = {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
};

export type ModalPickerPhotoProps = {
  isOpen: boolean;
  close: () => void;
};




export type HabitoT = {
  uuid: string;
  title: string;
  description: string;
  createdDate: Date;
  days: number[];
}

export type ComponentType = {
  children: JSX.Element;
};

export type TICONS = {
  [key: string]: JSX.Element;
};

export type TNamesIcons = {
  name: 'goBack' | 'lock';
};


export type TToast = {
  type: 'success' | 'error' | 'info';
  text1: string;
  text2: string;  
}

export type TToastOption = {
  success: TToast;
  error: TToast;
  info?: TToast;
}