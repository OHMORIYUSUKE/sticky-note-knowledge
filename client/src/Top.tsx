import { TextArea, HStack, Box } from "native-base";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";
const source = {
  html: `
  <p style='text-align:center;'>
    Hello World!
  </p>`,
};

const Top = () => {
  const { width } = useWindowDimensions();
  return (
    <>
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
        <Box alignItems="center" w="100%"></Box>
        <RenderHtml contentWidth={width} source={source} />
        <TextArea
          h={20}
          placeholder="Text Area Placeholder"
          w="75%"
          maxW="300"
          autoCompleteType={undefined}
          zIndex={1000}
        />
      </Box>
    </>
  );
};

export default Top;
