import * as React from "react";
import { View, StyleSheet, Image } from 'react-native';
import { List, Title } from 'react-native-paper'

const contactsData = [
  {
    name: "Charles Ying",
    title: "Manager",
    company: "Ying Pte Lid",
    //pic: "https://randomuser.me/portraits/men/1.jpg",
  },
  {
    name: "Emma Lin",
    title: "President",
    company: "Emma Consultants Pte Ltd",
  },
  {
    name: "Adam Matthew Timothy",
    title: "Entreprenuer",
    company: "Angels investment",
   
  },
  {
    name: "Barnabas Paul",
    title: "Consultant",
    company: "PBL Consults",
   
  },
];

export default function ContactScreen() {
  return(
    <View style={styles.container}>
      <Title style={styles.title}> Contacts </Title>
      <View style={styles.list}>
        {contactsData.map((item) => {
          return (
            <List.Item
              title={item.name}
              description={item.company, item.title}
              left={props =>
                <Image {...props} style={styles.icon} source={{ uri: item.pic }} />}
            />)
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20, 
  },
  list: {
    marginTop: 20,
    marginLeft: 10, 
    marginRight: 10
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 50
  }
})