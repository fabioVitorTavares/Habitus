import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Authenticate from "../Screens/Authenticate/Authenticate";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Home from "../Screens/Home/Home";
import AddNewHabito from "../Screens/AddNewHabito/AddNewHabito";
import Configs from "../Screens/Configs/Configs";
import Habitos from "../Screens/Habitos/Habitos";

export type RootStackParamList = {
  Authenticate: undefined;
  Home: undefined;
  Habitos: undefined;
  AddNewHabito: undefined;
  Configs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  const { authenticateWithPin } = useContext(AppContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Authenticate" component={Authenticate} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Habitos" component={Habitos} />
        <Stack.Screen name="AddNewHabito" component={AddNewHabito} />
        <Stack.Screen name="Configs" component={Configs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
