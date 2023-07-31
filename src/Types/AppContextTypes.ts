import { Dispatch, SetStateAction } from "react";

export type AppContextType = {
  theme?: string;
  backgroundColor?: string;
  setColor?: Dispatch<SetStateAction<string>>;
  categories?: string[];
  setCategories?: Dispatch<SetStateAction<string[]>>;
  categorySelected?: string;
  setCategorySelected?: Dispatch<SetStateAction<string>>;
  authenticateWithPin?: boolean;
  setAuthenticateWithPin?: Dispatch<SetStateAction<boolean>>;
  pin?: string,
  setPin?: Dispatch<SetStateAction<string>>;
  load?: boolean;
  setLoad?: Dispatch<SetStateAction<boolean>>;
}