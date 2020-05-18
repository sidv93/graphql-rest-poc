import { gql } from 'apollo-server';

const typeDefs = gql`
  type Movie {
      id: ID
      title: String
      director: String
      year: Int
    }
    
    type User {
      id: ID
      firstname: String
      lastname: String
      age: Int
      email: String
    }

    type Flight {
      id: ID
      source: String
      destination: String
      pilot: String
    }

    input MovieInput {
      title: String
      director: String
      year: String
    }

    input UserInput {
      firstname: String
      lastname: String
      age: Int
      email: String
    }

    input FlightInput {
      source: String
      destination: String
      pilot: String
    }

    type Query {
      movies(title: String, year: Int, offset: Int, limit: Int): [Movie]
      users(firstname: String, lastname: String, age: Int, offset: Int, limit: Int): [User]
      flights(source: String, destination: String, pilot: String): [Flight]
    }

    type Mutation {
      addMovie(movie: MovieInput): Movie
      deleteMovie(id: ID): Movie
      addUser(user: UserInput): User
      deleteUser(id: ID): User
      addFlight(flight: FlightInput): Flight
      deleteFlight(id: ID): Flight
    }
`;

export default typeDefs;
