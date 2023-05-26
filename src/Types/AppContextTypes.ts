import { Dispatch, SetStateAction } from "react";

export type AppContextType = {
  theme?: string;
  color?: string;
  setColor: Dispatch<SetStateAction<string>>;
}