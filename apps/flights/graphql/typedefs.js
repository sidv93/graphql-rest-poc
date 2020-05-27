import { gql } from 'apollo-server';

const typeDefs = gql`
    type Flight {
        id: ID
        source: String
        destination: String
        pilot: String
    }

    input FlightInput {
        source: String
        destination: String
        pilot: String
    }

    input FlightQuery {
        source: String
        destination: String
        pilot: String
        offset: Int
        limit: Int
    }

    type Query {
        flights(filters: FlightQuery): [Flight]
    }

    type Mutation {
        addFlight(flight: FlightInput): Flight
        deleteFlight(id: ID): Flight
    }
`;

export default typeDefs;
