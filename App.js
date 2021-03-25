import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from "./screens/HomeScreen";
import { EventsScreen } from "./screens/EventsScreen";
import { ContactScreen } from "./screens/ContactScreen";
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Events') {
              iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'fort-awesome' : 'font-awesome';
              return <FontAwesome name={iconName} size={size} color={color} />;
            }


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

