import { Text, TouchableOpacity, View } from "react-native";
import { optionsTouch } from "../../Constants/Constants";
import { styles } from "./TouchsStyles";
import { MaterialIcons as IconClearAll } from "@expo/vector-icons";
import { Feather as IconClearOne } from "@expo/vector-icons";
import { SibolTouchType, setStateType } from "../../Types/Types";

export default function Touchs({ setState: setPin }: setStateType) {
  const SimbolTouhc = ({ opt }: SibolTouchType) => {
    return opt === "clearOne" ? (
      <IconClearOne name="delete" style={styles.icon} />
    ) : opt === "clearAll" ? (
      <IconClearAll name="clear" style={styles.icon} />
    ) : (
      <Text style={styles.touchNumber}>{opt}</Text>
    );
  };

  const functionByOpt = (opt: string | number) => {
    return opt === "clearOne"
      ? () => setPin((prev) => prev.slice(0, prev.length - 1))
      : opt === "clearAll"
      ? () => setPin("")
      : () => setPin((prev) => (prev.length === 6 ? prev : `${prev}${opt}`));
  };

  return (
    <View style={styles.touchsContainer}>
      {optionsTouch.map((n) => {
        return (
          <View
            style={styles.touchNumberContainer}
            key={`${Math.random()}${n}`}
          >
            <TouchableOpacity
              style={styles.touchNumberPressable}
              onPress={functionByOpt(n)}
            >
              <SimbolTouhc opt={n} />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
