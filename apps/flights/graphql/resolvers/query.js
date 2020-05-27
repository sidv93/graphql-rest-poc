const Query = {
    flights: (_, { filters = {} }, { db }) => {
        const { offset = 0, limit = 10, source, destination, pilot, id, passenger } = filters;
        const flights = db.get('flights').value()
            .filter(item => {
                let flag = true;
                if (id) {
                    flag = flag && item.id == id;
                }
                if (source) {
                    flag = flag && item.source.includes(source);
                }
                if (destination) {
                    flag = flag && item.destination.includes(destination);
                }
                if (passenger) {
                    flag = flag && item.passengers.includes(passenger);
                }
                if (pilot) {
                    flag = flag && item.pilot.includes(pilot);
                }
                return flag;
            })
            .slice(offset, (+offset) + (+limit));
        return flights;
    }
};

export default Query;
