const Query = {
    users: (_, { filters={} }, { db }) => {
        const { offset = 0, limit = 10, firstname, age, lastname, email, flight } = filters;
        const users = db.get('users').value()
            .filter(item => {
                let flag = true;
                if (firstname) {
                    flag = flag && item.firstname.includes(firstname);
                }
                if (lastname) {
                    flag = flag && item.lastname.includes(lastname);
                }
                if (flight) {
                    flag = flag && (item.flight == flight);
                }
                if (age) {
                    flag = flag && (item.age == age);
                }
                if (email) {
                    flag = flag && item.email.includes(email);
                }
                return flag;
            })
            .slice(offset, (+offset) + (+limit));
        return users;
    },
    userById: (_, {id}, {db}) => {
        console.log('in user by id', id);
        const user = db.get('users').find({id: +(id)}).value();
        return [];
    },
    usersByFlight: (_, {flightId}, {db}) => {
        const users = db.get('users').filter({flight: flightId}).value();
        console.log('flight id', flightId, 'users', users);
        return users;
    }
};

export default Query;
