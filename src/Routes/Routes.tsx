import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./tab.routes";
import { createStackNavigator } from "@react-navigation/stack";
import Authenticate from "../Screens/Authenticate/Authenticate";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export type RootStackParamList = {
  Authenticate: undefined;
  App: undefined;
  Habitos: undefined;
  AddNewHabito: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  const { authenticateWithPin } = useContext(AppContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={authenticateWithPin ? "Authenticate" : "App"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Authenticate" component={Authenticate} />
        <Stack.Screen name="App" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
