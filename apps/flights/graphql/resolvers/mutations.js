const Mutations = {
    addFlight: (_, { flight }, { db }) => {
        const newFlight = {
            id: db.get('flights').size().value() + 1,
            ...flight
        };
        db.get('flights').push(newFlight).write();
        return newFlight;
    },

    deleteFlight: (_, { id }, { db }) => {
        const flight = db.get('flights').find({ id: +id }).value();
        db.get('flights').remove({ id: +id }).write();
        return flight;
    }
};

export default Mutations;
