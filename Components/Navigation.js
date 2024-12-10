import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import MenuScreen from "../Screens/MenuScreen";
import ParaComer from "../Screens/ParaComer";
import ParaTomar from "../Screens/ParaTomar";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator for "Para Comer" and "Para Tomar"
function TabNavigator({ route }) {
  const { screen } = route.params || {}; // Leer el parámetro 'screen'
  return (
    <Tab.Navigator
      initialRouteName={screen || "Comidas"} // Por defecto a "Comidas"
      screenOptions={{
        tabBarActiveBackgroundColor: "black",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#f0f0f0" },
      }}
    >
      <Tab.Screen
        name="Comidas"
        component={ParaComer}
        options={{
          tabBarLabel: "Comidas",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Bebidas"
        component={ParaTomar}
        options={{
          tabBarLabel: "Bebidas",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="glass-cocktail" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}


// Stack Navigator for the app
function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          title: "Menú Principal",
          headerShown: false, // No header in the main menu
        }}
      />
      <Stack.Screen
        name="RositaComidas"
        component={TabNavigator}
        options={{
          title: "Menú",
        }}
      />
            <Stack.Screen
        name="RositaBebidas"
        component={TabNavigator}
        options={{
          title: "Menú",
        }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
