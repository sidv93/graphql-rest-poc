import { gql } from 'apollo-server';

const typeDefs = gql`
    type User {
        id: ID
        firstname: String
        lastname: String
        age: Int
        email: String
        flight: String
    }
    input UserInput {
        firstname: String
        lastname: String
        age: Int
        email: String
    }
    input UserQuery {
        firstname: String
        lastname: String
        age: Int
        email: String
        offset: Int
        limit: Int
    }
    type Query {
        users(filters: UserQuery): [User]
        userById(id: String): User
        usersByFlight(flightId: String): [User]
    }
    type Mutation {
        addUser(user: UserInput): User
        deleteUser(id: ID): User
    }
`;

export default typeDefs;
