import * as React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function EventsHomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text> Events first Page: </Text>
        </View>
    );
}

const Stack = createStackNavigator();

export default function EventsScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="EventsHome" component={EventsHomeScreen} />
        </Stack.Navigator>

    );
  }