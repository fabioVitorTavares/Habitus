import { TouchableOpacity, View } from "react-native";
import { checkBoxChecked, checkBoxUnchecked } from "./CheckBoxStyles";

type CheckBoxProps = {
  checked: boolean;
  setChecked: () => void;
};

export default function CheckBox({ checked, setChecked }: CheckBoxProps) {
  return (
    <TouchableOpacity
      style={checked ? checkBoxChecked : checkBoxUnchecked}
      onPress={setChecked}
    />
  );
}
