import { Box, Button, Columns, Container, Stack } from "src/components";

const HomePage = () => (
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

    <Stack space="small">
      <Box marginTop="medium"> Item 1</Box>
      <Box> Item 2</Box>
      <Box> Item 3</Box>
    </Stack>
  </Container>
);

export default HomePage;
