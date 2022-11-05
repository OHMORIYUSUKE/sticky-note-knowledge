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
      <HStack
        bg="#A3BD75"
        py="3"
        px="16"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <IconButton
          icon={<Image source={require("./asset/btn_top.png")} size="sm" />}
          style={{ width: 66, height: 58 }}
          onPress={() => {
            navigation.navigate("Top");
          }}
        />
        <IconButton
          icon={<Image source={require("./asset/btn_book.png")} size="sm" />}
          style={{ width: 66, height: 58 }}
          onPress={() => {
            navigation.navigate("BookList");
          }}
        />
        <IconButton
          icon={<Image source={require("./asset/btn_mypage.png")} size="sm" />}
          style={{ width: 66, height: 58 }}
          onPress={() => {
            navigation.navigate("MyPage");
          }}
        />
      </HStack>
    </>
  );
};

export default Header;
