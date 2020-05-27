const Mutations = {
    addFlight: (_, {flight}, {db}) => {
        console.log('new flight', flight);
        // const res = db.get('flights').push(flight);
        return {status: 'success'};
    },

    deleteFlight: (_, {id}, {db}) => {
        // db.get('flights').remove({id: +id});
        return {status: 'success'};
    }
};

export default Mutations;
