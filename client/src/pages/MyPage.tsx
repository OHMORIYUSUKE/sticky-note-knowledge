import {
  TextArea,
  HStack,
  Box,
  Center,
  Heading,
  Image,
  Avatar,
  Spacer,
} from "native-base";
import { book } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Book } from "../lib/Book";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

const MyPage = () => {
  const [books, setBooks] = useState<Book[] | null>(null);

  useEffect(() => {
    const url = axios
      .get("http://localhost:3000/trpc/getBookAll")
      .then((data) => {
        setBooks(data.data.result.data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, []);
  return (
    <>
      <Center>
        <Spacer p="10" />
        <Avatar
          bg="green.500"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
        <Spacer p="2" />
        <FlatList
          scrollEnabled={false}
          data={books}
          keyExtractor={(book) => book.id}
          numColumns={3}
          renderItem={({ item }) => (
            <View>
              {/* <Image source={{ uri: item.url }} style={styles.image} /> */}
              <Box
                height="200"
                shadow="2"
                rounded="lg"
                _dark={{
                  bg: "coolGray.200:alpha.20",
                }}
                _light={{
                  bg: "coolGray.200:alpha.20",
                }}
              >
                <Image
                  alt=""
                  shadow="2"
                  rounded="lg"
                  size={100}
                  m={2}
                  source={{
                    uri: "https://static.es.cyberowl.jp/images/article/original/5e5864c561a30.jpg?7a0cb68&w=680",
                  }}
                  alt="Alternate Text"
                />
                <Heading size="lg" p={2}>
                  {item.title}
                </Heading>
              </Box>
            </View>
          )}
        />
      </Center>
    </>
  );
};

export default MyPage;
