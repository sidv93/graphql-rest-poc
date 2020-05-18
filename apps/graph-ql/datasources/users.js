import { RESTDataSource } from 'apollo-datasource-rest';

class UsersApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost/';
    }

    async getUsers(params) {
        return this.get('users', {...params});
    }

    async addUser(user) {
        return this.post('users', {...user});
    }

    async deleteUser(id) {
        return this.delete(`users/${id}`);
    }
}

export default UsersApi;
