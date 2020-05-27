const Mutations = {
    addMovie: (_, { movie }, { db }) => {
        const newMovie = {
            id: db.get('movies').size().value() + 1,
            ...movie
        };
        db.get('movies').push(newMovie).write();
        return newMovie;
    },
    deleteMovie: (_, { id }, { db }) => {
        const movie = db.get('movies').find({ id: +id }).value();
        db.get('movies').remove({ id: +id }).write();
        return movie;
    }
}

export default Mutations;
