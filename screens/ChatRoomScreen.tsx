import React from "react";
import { Text } from "../components/Themed";
import { useRoute } from "@react-navigation/native";
import { FlatList, ImageBackground } from "react-native";
import chatRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessage/index";
import BG from "../assets/images/BG.jpg";

const ChatRoomScreen = () => {
  const route = useRoute();
  console.log(route.params);
  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
