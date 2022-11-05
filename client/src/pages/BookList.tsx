import { TextArea, HStack, Box } from "native-base";
import { FlatList, Text, StatusBar, SectionList, View } from "react-native";
import { book } from "@prisma/client";

import getBookAll from "../lib/getBookAll";
import { trpc } from "../trpc";

const BookList = () => {
  const { bookDataList, isFetched } = trpc.useQuery(["getBookAll"]);

  if (!isFetched) return <Text>loading</Text>;
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

  const Item = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
  return (
    <>
      <Text>読みたい本を選択</Text>
      {/* <FlatList
        data={bookDataList?.map((bookData: book) => (
          <li key={bookData.id}>{bookData.title}</li>
        ))}
      /> */}
      <Text>{bookDataList}</Text>

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
