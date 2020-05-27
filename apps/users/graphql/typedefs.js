import { gql } from 'apollo-server';

const typeDefs = gql`
    type User {
        id: ID
        firstname: String
        lastname: String
        age: Int
        email: String
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
    }
    type Mutation {
        addUser(user: UserInput): User
        deleteUser(id: ID): User
    }
`;

export default typeDefs;
