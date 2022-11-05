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

const Header = () => {
  return (
    <>
      <StatusBar bg="#A3BD75" barStyle="light-content" />
      <Box safeAreaTop bg="#A3BD75" />
      <HStack
        bg="#A3BD75"
        py="3"
        px="20"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <HStack>
          <IconButton
            icon={
              <Image
                source={{
                  uri: "/Users/denham/Documents/sticky-note-knowledge/client/src/asset/btn_top.png",
                }}
                size="sm"
              />
            }
          />
          <IconButton
            icon={
              <Image
                source={{
                  uri: "/Users/denham/Documents/sticky-note-knowledge/client/src/asset/btn_mypage.png",
                }}
                size="sm"
              />
            }
          />
          <IconButton
            icon={
              <Image
                source={{
                  uri: "/Users/denham/Documents/sticky-note-knowledge/client/src/asset/btn_book.png",
                }}
                size="sm"
              />
            }
          />
        </HStack>
      </HStack>
    </>
  );
};

export default Header;
