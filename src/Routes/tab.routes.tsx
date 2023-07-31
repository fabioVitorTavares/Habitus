import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Screens/Home/Home";
import Habitos from "../Screens/Habitos/Habitos";
import AddNewHabito from "../Screens/AddNewHabito/AddNewHabito";
import { Feather } from "@expo/vector-icons";
import Configs from "../Screens/Configs/Configs";
import {
  IconAddNewHabitos,
  IconConfigs,
  IconHabitos,
  IconHome,
} from "../Icons/Incons";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconHome color={color} size={size} />
          ),
          tabBarLabel: "Início",
        }}
      />
      <Tab.Screen
        name="Habitos"
        component={Habitos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconHabitos color={color} size={size} />
          ),
          tabBarLabel: "Hábitos",
        }}
      />
      <Tab.Screen
        name="AddNewHabito"
        component={AddNewHabito}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconAddNewHabitos color={color} size={size} />
          ),
          tabBarLabel: "Novo Hábito",
        }}
      />
      <Tab.Screen
        name="Configs"
        component={Configs}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconConfigs color={color} size={size} />
          ),
          tabBarLabel: "Configurações",
        }}
      />
    </Tab.Navigator>
  );
}
