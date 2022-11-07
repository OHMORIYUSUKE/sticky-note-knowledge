import { TextArea, HStack, Box, Center, Heading, Image } from "native-base";
import { FlatList, Text, StatusBar, SectionList, View } from "react-native";
import { book } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Book } from "../lib/Book";

const BookList = () => {
  const [books, setBooks] = useState<Book[] | null>(null);

  return (
    <>
      <Center>
        <Heading size="xl" p={20}>
          読みたい本を選択
        </Heading>
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

export default BookList;
