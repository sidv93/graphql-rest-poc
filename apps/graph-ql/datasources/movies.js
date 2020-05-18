import { RESTDataSource } from 'apollo-datasource-rest';

class MoviesApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost/';
    }

    async getMovies(params) {
        return this.get('movies', {...params});
    }

    async addMovie(movie) {
        return this.post('movies', {...movie});
    }

    async deleteMovie(id) {
        return this.delete(`movies/${id}`);
    }
}

export default MoviesApi;
