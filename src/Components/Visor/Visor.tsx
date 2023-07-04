import { Text, View } from "react-native";
import { styles } from "./VisorStyles";

type PinType = {
  pin: string;
  pinError: boolean;
};

export default function Visor({ pin, pinError }: PinType) {
  const colorDigits = () => {
    return pinError
      ? { color: "#dc0d0d", borderBottomColor: "#dc0d0d" }
      : { color: "#000" };
  };

  return (
    <View style={styles.visorContainer}>
      <Text style={{ ...styles.digit, ...colorDigits() }}>{pin[0]}</Text>
      <Text style={{ ...styles.digit, ...colorDigits() }}>{pin[1]}</Text>
      <Text style={{ ...styles.digit, ...colorDigits() }}>{pin[2]}</Text>
      <Text style={{ ...styles.digit, ...colorDigits() }}>{pin[3]}</Text>
      <Text style={{ ...styles.digit, ...colorDigits() }}>{pin[4]}</Text>
      <Text style={{ ...styles.digit, ...colorDigits() }}>{pin[5]}</Text>
    </View>
  );
}
