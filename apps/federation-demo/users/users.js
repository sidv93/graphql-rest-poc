const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");

const port = 4004;
const apiUrl = "http://localhost:3000";

const typeDefs = gql`
  type User {
    id: ID!
    firstname: String
    lastname: String
    age: Int
  }

  extend type Query {
      user(id: String): User
      users: [User]
  }
`;

const resolvers = {
    Query: {
        user(_, { id }, {userId}) {
            console.log('userId', userId);
            return {
                id: "1",
                firstname: "Siddharth",
                lastname: "Venkatesh",
                age: 26
            };
        },
        users() {
            return [
                {
                    id: "1",
                    firstname: "Siddharth",
                    lastname: "Venkatesh",
                    age: 26
                },
                {
                    id: "2",
                    firstname: "John",
                    lastname: "Smith",
                    age: 40
                }
            ]
        }
    }
};

const server = new ApolloServer({
    schema: buildFederatedSchema([{ typeDefs, resolvers }]),
    context: ({req}) => {
        const userId = req.headers['user-id'];
        console.log('userid', userId);
        return {userId}
    }
});

server.listen({ port }).then(({ url }) => {
    console.log(`Users service ready at ${url}`);
});
