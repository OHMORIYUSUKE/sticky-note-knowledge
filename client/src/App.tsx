import { QueryClientProvider, QueryClient } from "react-query";
import { trpc } from "./trpc";
import { NativeBaseProvider } from "native-base";
import { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Header from "./Header";
import Top from "./pages/BookView";
import BookView from "./pages/BookView";
import BookList from "./pages/BookList";

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
            <BookView />
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
