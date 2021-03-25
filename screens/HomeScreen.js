import * as React from "react"; 
import { Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { List, Card, Title, Paragraph } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack'

/*export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }*/

const Stack = createStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={HomeScreen}/>
    </Stack.Navigator>
  )
}

function HomeScreen() {

  return(
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>
          Basket Throwing Tournament
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Welcome</Title>
            <Paragraph>Thank you for downloadiing this app. You will find all the details of the events here. Stay tuned!</Paragraph>
          </Card.Content>
          <Card.Cover style={{marginTop: 10, height: 400}} source={{ uri: 'https://www.ikea.com/sg/en/images/products/branaes-basket-rattan__0710999_pe727908_s5.jpg' }} />
        </Card>
        
        <List.Section title="Frequently Asked Questions">
          <List.Accordion
            title="What is this for?">
            <List.Item title="Have fun throwing balls!" />
          </List.Accordion>
          <List.Accordion
            title="When will this be?">
            <List.Item title="Very soon, stay tuned" />
          </List.Accordion>
          <List.Accordion
            title="Where will this be?">
            <List.Item title="Hougang Court besides The RiverView condo" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  card: {
    marginTop: 20, 
    marginLeft: 15, 
    marginRight: 15,
  }
})