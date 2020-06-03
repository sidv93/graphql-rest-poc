const { ApolloServer } = require("apollo-server");
const { ApolloGateway, RemoteGraphQLDataSource } = require("@apollo/gateway");
require('dotenv').config();

const port = 4000;

class AuthenticationHeaders extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }) {
    request.http.headers.set('user-id', context.userId);
  }
}

const gateway = new ApolloGateway({
  buildService({ name, url }) {
    return new AuthenticationHeaders({ url });
  },
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    console.log('token', token);
     /**
      * Verify if token is valid or not. Make async calls here.
      * if(!token.valid) throw new Error('Not a valid token')
      */
     
    return { userId: 'Sid' };
  }
});

server.listen({ port }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
