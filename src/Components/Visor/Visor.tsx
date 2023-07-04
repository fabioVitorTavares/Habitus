import { Text, View } from "react-native";
import { styles } from "./VisorStyles";

type PinType = {
  pin: string;
};

export default function Visor({ pin }: PinType) {
  return (
    <View style={styles.visorContainer}>
      <Text style={styles.digit}>{pin[0]}</Text>
      <Text style={styles.digit}>{pin[1]}</Text>
      <Text style={styles.digit}>{pin[2]}</Text>
      <Text style={styles.digit}>{pin[3]}</Text>
      <Text style={styles.digit}>{pin[4]}</Text>
      <Text style={styles.digit}>{pin[5]}</Text>
    </View>
  );
}
