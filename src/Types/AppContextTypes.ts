import { Dispatch, SetStateAction } from "react";

export type AppContextType = {
  theme?: string;
  backgroundColor?: string;
  setColor?: Dispatch<SetStateAction<string>>;
  categories?: string[];
  setCategories?: Dispatch<SetStateAction<string[]>>;
  categorySelected?: string;
  setCategorySelected?: Dispatch<SetStateAction<string>>;
  requireAuthetication?: boolean;
  setRequireAuthentication?: Dispatch<SetStateAction<boolean>>;
  load?: boolean;
  setLoad?: Dispatch<SetStateAction<boolean>>;
  widthScreen?: number,
  heightScreen?: number,
  perfilPhotoUri: string,
  setPerfilPhotoUri: Dispatch<SetStateAction<string>>
}