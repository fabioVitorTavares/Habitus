import { Dispatch, SetStateAction } from "react";

export type setStateType = {
  setState: Dispatch<SetStateAction<string>>;
};

export type SibolTouchType = {
  opt: string | number;
};