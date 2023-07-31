import { View, Text } from "react-native";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";
import { styles } from "./ConfigsStyles";

export default function Configs() {
  return (
    <ScreenContainer>
      <View style={styles.homeContainer}>
        <Text>Configs</Text>
      </View>
    </ScreenContainer>
  );
}
