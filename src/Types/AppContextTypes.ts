import { Dispatch, SetStateAction } from "react";

export type AppContextType = {
  theme?: string;
  color?: string;
  setColor?: Dispatch<SetStateAction<string>>;
  categories?: string[];
  setCategories?: Dispatch<SetStateAction<string[]>>;
  categorySelected?: string;
  setCategorySelected?: Dispatch<SetStateAction<string>>;
}