import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import users from "../data/Users";
import { FlatList } from "react-native-gesture-handler";
import NewMessageButton from "../components/NewMessageButton";
import ContactsListItem from "../components/ContactsListItem";

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={users}
        renderItem={({ item }) => <ContactsListItem user={item} />}
        keyExtractor={(item) => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
