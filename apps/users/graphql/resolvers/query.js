const Query = {
    users: (_, {filters}, {db}) => {
        return db.get('users').value;
    }
};

export default Query;
