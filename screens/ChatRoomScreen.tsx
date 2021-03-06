import React from "react";
import { Text } from "../components/Themed";
import { useRoute } from "@react-navigation/native";
import { FlatList, ImageBackground } from "react-native";
import chatRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessage/index";
import BG from "../assets/images/BG.jpg";
import InputBox from "../components/InputBox/index";

const ChatRoomScreen = () => {
  const route = useRoute();
  
  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
      <InputBox />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
