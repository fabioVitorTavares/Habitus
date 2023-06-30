import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationProp } from "@react-navigation/native";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";

type NavigationType = {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
};

export default function Authenticate({ navigation }: NavigationType) {
  return (
    <ScreenContainer>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("App")}>
          <Text>Authenticate</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}
