const Mutations = {
    addUser: (_, { user }, { db }) => {
        const newUser = {
            id: db.get('users').size().value() + 1,
            ...user
        };
        db.get('users').push(newUser).write();
        return newUser;
    },
    deleteUser: (_, { id }, { db }) => {
        const user = db.get('users').find({ id: +id }).value();
        db.get('users').remove({ id: +id }).write();
        return user;
    }
}

export default Mutations;
