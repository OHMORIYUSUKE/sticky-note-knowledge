import React from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  Image,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { StackActions } from "@react-navigation/native";

const Header = ({ navigation }: any) => {
  return (
    <>
      <StatusBar backgroundColor={"#A3BD75"} barStyle="light-content" />
      <Box safeAreaTop bg="#A3BD75" />
      <HStack
        bg="#A3BD75"
        py="3"
        px="20"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <IconButton
          icon={<Image source={require("./asset/btn_top.png")} size="sm" />}
          style={{ width: 66, height: 58, backgroundColor: "lightblue" }}
          onPress={() => {
            navigation.navigate("Top");
          }}
        />
        <IconButton
          icon={<Image source={require("./asset/btn_mypage.png")} size="sm" />}
          style={{ width: 66, height: 58, backgroundColor: "lightblue" }}
          onPress={() => {
            navigation.navigate("MyPage");
          }}
        />
        <IconButton
          icon={<Image source={require("./asset/btn_book.png")} size="sm" />}
          style={{ width: 66, height: 58, backgroundColor: "lightblue" }}
          onPress={() => {
            navigation.navigate("BookList");
          }}
        />
      </HStack>
    </>
  );
};

export default Header;
