import Head from "next/head";
import {
  Box,
  Button,
  Columns,
  Container,
  Stack,
  TextField
} from "src/components";

const HomePage = () => (
  <>
    <Head>
      <title>next app</title>
    </Head>
    <Container>
      <Box padding="large">
        <Button size="large" color="primary" variant="outline">
          outline large
        </Button>
        <Button size="small" color="primary" variant="solid">
          solid small
        </Button>
        <Button enableElevation>default button</Button>
      </Box>

      <Stack space="small" width="auto">
        <Columns space="xsmall">
          <Box> Item 1</Box>
          <Box> Item 2</Box>
          <Box> Item 3</Box>
        </Columns>
      </Stack>

      <Stack space="medium">
        <Box marginTop="medium">
          <TextField title="username" />
        </Box>
        <Box>
          <TextField title="password" type="password" />
        </Box>
        <Box> Item 3</Box>
      </Stack>
    </Container>
  </>
);

export default HomePage;
