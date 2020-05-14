const { RESTDataSource } = require('apollo-datasource-rest');

class MoviesApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost/';
    }

    async getMovies() {
        return this.get('movies');
    }
}

module.exports = MoviesApi;
