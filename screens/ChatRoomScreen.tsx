import React from "react";
import { Text } from "../components/Themed";
import { useRoute } from "@react-navigation/native";

const ChatRoomScreen = () => {
  const route = useRoute();
  console.log(route.params);
  return <Text> bhm </Text>;
};

export default ChatRoomScreen;
