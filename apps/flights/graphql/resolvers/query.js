const Query = {
    flights: (_, {filters}, {db}) => {
        const res = db.get('flights').value;
        return res;
    }
};

export default Query;
