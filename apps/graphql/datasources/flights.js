import { RESTDataSource } from 'apollo-datasource-rest';

class FlightsApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost/';
    }

    async getFlight(id) {
        return this.get(`flights/${id}`);
    }

    async getFlights(params) {
        return this.get('flights', {...params});
    }

    async addFlight(flight) {
        return this.post('flights', {...flight});
    }

    async deleteFlight(id) {
        return this.delete(`flights/${id}`);
    }
}

export default FlightsApi;
