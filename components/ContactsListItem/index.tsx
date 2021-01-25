import "react-native-gesture-handler";
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { User } from "../../types";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { API, graphqlOperation, Auth } from "aws-amplify";
import {
  createChatRoom,
  createChatRoomUser,
} from "../../src/graphql/mutations";

export type ContactsListItemProps = {
  user: User;
};

const ContactsListItem = (props: ContactsListItemProps) => {
  const { user } = props;
  const navigation = useNavigation();

  const onClick = async () => {
    try {
      //check if a chatroom already exists if it does exit with a conole.log

      //create a new chatRoom if one doesnt exist
      const newChatRoomData = await API.graphql(
        graphqlOperation(createChatRoom, { input: {} })
      );
      console.log(newChatRoomData);
      if (!newChatRoomData.data) {
        console.log("Failed to create a new chat room");
        return;
      }
      const newChatData = newChatRoomData.data.createChatRoom;
      console.log(newChatData);

      //create a new chatRoomUser if a new chatRoom is created
      await API.graphql(
        graphqlOperation(createChatRoomUser, {
          input: {
            userID: user.id,
            chatRoomID: newChatData.id,
          },
        })
      );
      //add authenticated user to the chatRoom created
      const userInfo = await Auth.currentAuthenticatedUser();
      await API.graphql(
        graphqlOperation(createChatRoomUser, {
          input: {
            userID: userInfo.attributes.sub,
            chatRoomID: newChatData.id,
          },
        })
      );
      navigation.navigate("ChatRoom", {
        id: newChatData.id,
        name: user.name,
        imageURI: user.imageURI,
      });

      console.log(object);
    } catch (error) {
      console.log(error);
    }

    
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageURI }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.status}>{user.status}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactsListItem;
