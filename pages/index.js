import Head from "next/head";
import {
  Box,
  Button,
  Columns,
  Container,
  Grid,
  Grids,
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
          <TextField title="password" type="password" required />
        </Box>
        <Box> Item 3</Box>
      </Stack>

      <Grids space="large">
        <Grid xs={12} sm={6} md={8} style={{ background: "brown" }}>
          Hello
        </Grid>
        <Grid xs={12} sm={6} md={4} style={{ background: "gold" }}>
          world
        </Grid>
      </Grids>
      <Grids space="large">
        <Grid style={{ background: "brown" }}>on1</Grid>
        <Grid style={{ background: "gold" }}>on2</Grid>
      </Grids>
    </Container>
  </>
);

export default HomePage;
