const Mutations = {
    addMovie: (_, {movie}, {db}) => {
        return {status: 'success'};
    },
    deleteMovie: (_, {id}, {db}) => {
        return {status: 'success'};
    }
}

export default Mutations;
