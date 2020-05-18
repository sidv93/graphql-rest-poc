const Query = {
    movies: async (_, args, { dataSources }) => {
        const res = await dataSources.moviesApi.getMovies({...args});
        return res.data;
    },
    users: async (_, args, { dataSources }) => {
        const res = await dataSources.usersApi.getUsers({...args});
        return res.data;
    },
    flights: async (_, args, { dataSources }) => {
        const res = await dataSources.flightsApi.getFlights({...args});
        return res.data;
    }
}

export default Query