import db from './db';

export const addFlight = (req, res) => {
    const newFlight = {
        id: db.get('flights').size().value()+1,
        ...req.body
    };
    db.get('flights').push(newFlight).write();
    res.status(200);
    return res.json({
        status: 'success',
        message: 'Flight added',
        data: newFlight
    });
};

export const getFlights = (req, res) => {
    const { offset = 0, limit = 10, source, destination, pilot, id, passenger } = req.query;
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
    res.status(200);
    return res.json({
        status: 'success',
        message: 'Flights',
        data: flights
    });
}

export const getFlight = (req, res) => {
    const {id} = req.params;
    const flight = db.get('flights').find({id: +id}).value();
    res.status(200);
    return res.json({
        status: 'success',
        message: 'Flight',
        data: flight
    });
}

export const updateFlight = (req, res) => {
    const {id} = req.body;
    db.get('flights').find({id}).update({...req.body}).write();
    const updatedFlight = db.get('flights').find({id}).value();
    res.status(200);
    return res.json({
        status: 'success',
        message: 'Flight updated',
        data: updatedFlight
    })
}

export const deleteFlight = (req, res) => {
    const { id } = req.params;
    const flight = db.get('flights').find({id: +id}).value();
    db.get('flights').remove({id: +id}).write();
    res.status(200);
    return res.json({
        status: 'success',
        message: 'Flight removed',
        data: flight
    })
}
