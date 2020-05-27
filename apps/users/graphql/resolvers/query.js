const Query = {
    users: (_, { filters={} }, { db }) => {
        const { offset = 0, limit = 10, firstname, age, lastname, email, id, flight } = filters;
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
                if (id) {
                    flag = flag && (item.id == id);
                }
                if (email) {
                    flag = flag && item.email.includes(email);
                }
                return flag;
            })
            .slice(offset, (+offset) + (+limit));
        return users;
    }
};

export default Query;
