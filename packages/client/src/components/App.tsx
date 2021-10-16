import { Box, Header, Main, Text } from "grommet";
import React from "react";
import { contentApi } from "../state/contentApi";

export default function App() {
  const helloWorldFromBackend = contentApi.useGetHelloWorldQuery();
  return (
    <div>
      <Header pad="small" justify="start">
        <Text size="large" weight="bold">
          Fullstack
        </Text>
      </Header>
      <Main>
        <Box direction="row" justify="evenly">
          <div>{helloWorldFromBackend.data}</div>
        </Box>
      </Main>
    </div>
  );
}
