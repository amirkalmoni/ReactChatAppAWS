import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify from "aws-amplify";
import config from "./src/aws-exports.js";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { getUser } from "./src/graphql/queries";
import { createUser } from "./src/graphql/mutations";
Amplify.configure(config);

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  //Array of random images
  const randomImage = [
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg",
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg",
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg",
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg",
  ];
  //gets a random image to be assigned to new user
  const getRandomImage = () => {
    return randomImage[Math.floor(Math.random() * randomImage.length)];
  };

  // this part is only run when the appplication is mounted for the first time
  useEffect(() => {
    const fetchUser = async () => {
      // get authenticated user from AWS Auth
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      //if user information is not null then get the users attributes using GraphQL getUser query
      if (userInfo) {
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );

        //get the user from the backend with the user id from auth
        console.log(userData);
        if (userData.data.getUser) {
          console.log("user already registered in database");
        } 
        else {
          // object of a new user to be created
          console.log("a new user has been created");
          const newUser = {
            id: userInfo.attributes.sub,
            name: userInfo.username,
            imageURI: getRandomImage(),
            status: "Hey, I am using Whatsapp",
          };
          //if there is no user in the db with the user id, create one using GraphQL mutation
          await API.graphql(graphqlOperation(createUser, { input: newUser }));
        }
      }
    };
    fetchUser();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
//authentication using built-in AWS sign-up/sign-in
export default withAuthenticator(App);
