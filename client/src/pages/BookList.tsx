import { TextArea, HStack, Box } from "native-base";
import { FlatList, Text, StatusBar, SectionList, View } from "react-native";
import { book } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Book } from "../lib/Book";

const BookList = () => {
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

  const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
  ];

  const Item = ({ title }: any) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
  return (
    <>
      <Text>読みたい本を選択</Text>

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
      />
    </>
  );
};

export default BookList;
