import { ApolloServer } from 'apollo-server';
import MoviesApi from './datasources/movies';
import FlightsApi from './datasources/flights';
import UsersApi from './datasources/users';
import typeDefs from './typedefs';
import Query from './resolvers/query';
import Mutation from './resolvers/mutations';

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query, Mutation
  },
  dataSources: () => {
    return {
      moviesApi: new MoviesApi(),
      flightsApi: new FlightsApi(),
      usersApi: new UsersApi()
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  GraphQL server is ready at ${url}`);
});