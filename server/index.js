import "dotenv/config";
import next from "next";
import { ApolloServer } from "apollo-server-express";
import connectToDatabase from "./mongoose";
import handleNodeEventException from "./node-event";
import apolloServerConfig from "./apollo-server-config";
import expressApp from "./express";

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const mongoose = await connectToDatabase(process.env.SEED_DB);
  // const schema = makeExecutableSchema(apolloServerConfig());

  const server = expressApp;

  const apollo = new ApolloServer(apolloServerConfig());

  // // apply apolloserver middleware with a path to the app
  apollo.applyMiddleware({ app: server, path: "/api/graphql" });

  // custom nextjs route
  server.get("/a", (req, res) => {
    return app.render(req, res, "/a", req.query);
  });

  server.get("/b", (req, res) => {
    return app.render(req, res, "/b", req.query);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen({ port }, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
    console.log(`GraphQL available at ${apollo.graphqlPath}`);
  });

  // handle exception
  handleNodeEventException(server, mongoose);
});
