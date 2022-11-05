import { QueryClientProvider, QueryClient } from "react-query";
import { trpc } from "./trpc";
import { NativeBaseProvider, TextArea, HStack, Center, Box } from "native-base";
import { useState } from "react";
import { Form } from "./Form";
import { TodoList } from "./TodoList";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";
import Header from "./Header";
const client = new QueryClient();
const url = "http://localhost:3000/trpc";

const App = () => {
  const [trpcClient] = useState(() => trpc.createClient({ url }));
  return (
    <NativeBaseProvider>
      <trpc.Provider queryClient={client} client={trpcClient}>
        <QueryClientProvider client={client}>
          <Header />
          <SafeAreaView style={styles.container}>
            <Box bgColor="#FDF9EA">
              <HStack space={3} justifyContent="center">
                <Text>Title</Text>
                <Text>初心者が作る！HTML入門</Text>
                <Text>123p</Text>
              </HStack>
              <TextArea
                h={450}
                placeholder="Text Area Placeholder"
                autoCompleteType={undefined}
              />
            </Box>
          </SafeAreaView>
        </QueryClientProvider>
      </trpc.Provider>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default App;
