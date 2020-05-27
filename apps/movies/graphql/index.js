import { ApolloServer } from 'apollo-server';
import typeDefs from './typedefs';
import Query from './resolvers/query';
import Mutation from './resolvers/mutations';
import db from './db';

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation
  },
  context: { db }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Movies GraphQL server is ready at ${url}`);
});
