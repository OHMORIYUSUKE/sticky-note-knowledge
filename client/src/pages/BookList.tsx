import { TextArea, HStack, Box } from "native-base";
import { FlatList, Text, StatusBar } from "react-native";
import { book } from "@prisma/client";

import getBookAll from "../lib/getBookAll";
import { trpc } from "../trpc";

const BookList = () => {
  const { bookDataList, isFetched } = trpc.useQuery(["getBookAll"]);

  if (!isFetched) return <Text>loading</Text>;

  return (
    <>
      <Text>読みたい本を選択</Text>
      <FlatList
        data={bookDataList?.map((bookData: book) => (
          <li key={bookData.id}>{bookData.title}</li>
        ))}
      />
    </>
  );
};

export default BookList;
