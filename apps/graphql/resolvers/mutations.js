const Mutations = {
    addMovie: async (_, {movie}, {dataSources}) => {
        const res = await dataSources.moviesApi.addMovie(movie);
        return res.data;
    },
    deleteMovie: async (_, {id}, {dataSources}) => {
        const res = await dataSources.moviesApi.deleteMovie(id);
        return res.data;
    },
    addUser: async (_, {user}, { dataSources}) => {
        const res = await dataSources.usersApi.addUser(user);
        return res.data;
    },
    deleteUser: async (_, {id}, {dataSources}) => {
        const res = await dataSources.usersApi.deleteUser(id);
        return res.data;
    },
    addFlight: async (_, {flight}, {dataSources}) => {
        const res = await dataSources.flightsApi.addFlight(flight);
        return res.data;
    },
    deleteFlight: async (_, {id}, {dataSources}) => {
        const res = await dataSources.flightsApi.deleteFlight(id);
        return res.data;
    }
}

export default Mutations;
