const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
const fetch = require("node-fetch");

const port = 4003;
const apiUrl = "http://localhost:3000";

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String
    year: Int
  }

  extend type Query {
      movie(id: String): Movie
      movies: [Movie]
  }
`;

const resolvers = {
    Query: {
        movie(_, { id }) {
            return {
                id: "1",
                title: "Harry Potter and the chamber of secrets",
                year: 2000
            };
        },
        movies() {
            return [
                {
                    id: "1",
                    title: "Harry Potter and the chamber of secrets",
                    year: 2000
                },
                {
                    id: "2",
                    title: "Harry Potter and the Deathyly hallows",
                    year: 2015
                }
            ]
        }
    }
};

const server = new ApolloServer({
    schema: buildFederatedSchema([{ typeDefs, resolvers }])
});

server.listen({ port }).then(({ url }) => {
    console.log(`Movies service ready at ${url}`);
});
