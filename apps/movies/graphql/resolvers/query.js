const Query = {
    movies: (_, { filters={} }, { db }) => {
        const { limit = 10, offset = 0, title, director, year } = filters;
        const movies = db.get('movies').value()
            .filter(item => {
                let flag = true;
                if (title) {
                    flag = flag && item.title.includes(title);
                }
                if (director) {
                    flag = flag && item.director.includes(director);
                }
                if (year) {
                    flag = flag && (item.year == year);
                }
                return flag;
            })
            .slice(offset, (+offset) + (+limit));
        return movies;
    }
};

export default Query;
