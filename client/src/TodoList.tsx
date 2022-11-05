import { trpc } from "./trpc";
import { FlatList, Text, StatusBar, Item } from "react-native";

export const TodoList = () => {
  const { data, isFetched } = trpc.useQuery(["getTodoList"]);

  if (!isFetched) return <Text>loading</Text>;

  return (
    <>
      <Text>todo list</Text>
      <FlatList
        data={data?.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      />
    </>
  );
};
