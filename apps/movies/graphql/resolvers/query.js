const Query = {
    movies: (_, {filters}, {db}) => {
        const res = db.get('movies').value;
        return res;
    }
};

export default Query;
