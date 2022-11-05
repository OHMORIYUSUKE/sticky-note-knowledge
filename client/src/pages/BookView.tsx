import { TextArea, HStack, Box } from "native-base";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";
import Header from "../Header";
const source = {
  html: `ぶんしょう">文章</span>はダミーです。文字の大きさ、量、字間、行間等を<span data-yomi="かくにん">確認</span>するために入れています。この<span data-yomi="ぶんしょう">文章</span>はダミーです。文字の大きさ、量、字間、行間等を<span data-yomi="かくにん">確認</span>するために入れています。この<span data-yomi="ぶんしょう">文章</span>はダミーです。文字の大きさ、量、字間、行間等を<span data-yomi="かくにん">確認</span>するために入れています。この<span data-yomi="ぶんしょう">文章</span>はダミーです。文字の大きさ、量、字間、行間等を<span data-yomi="かくにん">確認</span>するために入れています。この<span data-yomi="ぶんしょう">文章</span>はダミーです。文字の大きさ、量、字間、行間等を<span data-yomi="かくにん">確認</span>するために入れています。この<span data-yomi="ぶんしょう">文章</span>はダミーです。文字の大きさ、量、字間、行間等を<span data-yomi="かくにん">確認</span>するために入れています。この<span data-yomi="ぶんしょう">文章</span>はダミーです。文字の大きさ、量、字間、行間等を<span data-yomi="かくにん">確認</span>するために入れています。この<span data-yomi="ぶんしょう">文章</span>はダミーです。文字の大きさ、量、字間、行間等を<span data-yomi="かくにん">確認</span>するために入れています。この<span data-yomi="ぶんしょう">文章</span>はダミーです。文字の大きさ、量、字間、行間等を<span data-yomi="かくにん">確認</span>するために入れています。この<span data-yomi="ぶんしょう">文章</span>はダミーです。文字の大きさ、量、字間、行間等を<span data-yomi="かくにん">確認</span>するために入れています。`,
};

const BookView = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <Header />
      <HStack space={3} justifyContent="center">
        <Text>Title</Text>
        <Text>初心者が作る！HTML入門</Text>
        <Text>123p</Text>
      </HStack>
      <Box
        width="100%"
        height="80%"
        bg="primary.200"
        p={4}
        borderWidth={"2xl"}
        zIndex={100}
        _text={{
          fontSize: "md",
          fontWeight: "bold",
          color: "white",
        }}
      >
        <RenderHtml
          tagsStyles={{
            span: { fontSize: 25 },
            p: { color: "#787878" },
            div: { color: "#787878" },
          }}
          contentWidth={width}
          source={source}
        />
        <Box
          alignSelf="center"
          _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg",
          }}
          margin="-100"
          width="100"
          height="100"
          zIndex="1000"
          bg={["red.400", "blue.400"]}
        >
          <Box>
            <RenderHtml
              tagsStyles={{
                span: { fontSize: 25 },
                p: { color: "#787878" },
                div: { color: "#787878" },
              }}
              contentWidth={width}
              source={source}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BookView;
