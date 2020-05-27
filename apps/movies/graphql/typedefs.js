import { gql } from 'apollo-server';

const typeDefs = gql`
    type Movie {
        id: ID
        title: String
        director: String
        year: Int
    }
    input MovieInput {
        title: String
        director: String
        year: Int
    }
    input MovieQuery {
        title: String
        director: String
        year: Int,
        offset: Int
        limit: Int
    }
    type Query {
        movies(filters: MovieQuery): [Movie]
    }
    type Mutation {
        addMovie(movie: MovieInput): Movie
        deleteMovie(id: ID): Movie
    }
`;

export default typeDefs;
