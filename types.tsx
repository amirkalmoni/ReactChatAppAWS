export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type CameraParamList = {
  TabOneScreen: undefined;
};

export type ChatsParamList = {
  TabTwoScreen: undefined;
};

export type StatusParamList = {
  TabThreeScreen: undefined;
};

export type CallsParamList = {
  TabThreeScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageURI: String;
  status: string;
};

export type Message = {
  id: String;
  content: String;
  createdAt: number;
  user: User;
};

export type ChatRoom = {
  id: string;
  users: User[];
  lastMessage: Message;
};

export type newChatRoomData = {
  data: string;
};
