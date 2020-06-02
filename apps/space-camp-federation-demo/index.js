const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");
require('dotenv').config();

const port = 4000;

const gateway = new ApolloGateway();

const server = new ApolloServer({
  gateway,
  subscriptions: false
});

server.listen({ port }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
