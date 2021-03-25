import * as React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function EventsHomeScreen( {navigation} ) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text> Events first Page!! </Text>
            <Text> </Text>
            <Button
                onPress={() => navigation.navigate("EventsSecond")}
                title="Second Screen" ></Button>
            <Text> </Text>
            <Button onPress={() => navigation.navigate("EventsThird")} 
                title="Third Screen">
               </Button>
                
        </View>
    );
}

function EventsSecondScreen({ navigation}){
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Events Second Page!</Text>
        </View>
    )
}

function EventsThirdScreen({ navigation}){
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Events Third Page!</Text>
        </View>
    )
}


const Stack = createStackNavigator();

export default function EventsScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="EventsHome" component={EventsHomeScreen} />
            <Stack.Screen name="EventsSecond" component={EventsSecondScreen} />
            <Stack.Screen name="EventsThird" component={EventsThirdScreen} />
        </Stack.Navigator>

    );
  }

  const styles = StyleSheet.create({
 
    button:{
      backgroundColor: "red",
      padding: 20,
      borderRadius: 10,
      marginTop: 20,
      marginLeft: 60,
      marginRight: 60,
    },
  
    buttonText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 20,
    },

    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
      },
    })
  