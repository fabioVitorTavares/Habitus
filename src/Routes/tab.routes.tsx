import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Screens/Home/Home";
import Habitos from "../Screens/Habitos/Habitos";
import AddNewHabito from "../Screens/AddNewHabito/AddNewHabito";
import { Feather } from "@expo/vector-icons";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarLabel: "Home"
        }}
      />
      <Tab.Screen
        name="Habitos"
        component={Habitos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="book" color={color} size={size} />
          ),
          tabBarLabel: "Hábitos"

        }}
      />
      <Tab.Screen
        name="AddNewHabito"
        component={AddNewHabito}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus" color={color} size={size} />
          ),
          tabBarLabel: "Add"

        }}
      />
    </Tab.Navigator>
  );
}
