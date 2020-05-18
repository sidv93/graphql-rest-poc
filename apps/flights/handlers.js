import db from './db';

export const addFlight = (req, res) => {
    console.log('body', req.body);
    const newFlight = {
        id: db.get('flights').size().value()+1,
        ...req.body
    };
    console.log('new flight', newFlight);
    db.get('flights').push(newFlight).write();
    res.status(200);
    return res.json({
        status: 'success',
        message: 'Flight added',
        data: newFlight
    });
};

export const getFlights = (req, res) => {
    const { offset = 0, limit = 10, source, destination, pilot } = req.query;
    const flights = db.get('flights').value()
        .filter(item => {
            let flag = true;
            if (source) {
                flag = item.source.includes(source);
            }
            if (destination) {
                flag = item.destination.includes(destination);
            }
            if (pilot) {
                flag = item.pilot.includes(pilot);
            }
            return flag;
        })
        .slice(offset, offset + limit);
    res.status(200);
    return res.json({
        status: 'success',
        message: 'Flights',
        data: flights
    });
}

export const updateFlight = (req, res) => {
    console.log('body', req.body);
    const {id} = req.body;
    db.get('flights').find({id}).update({...req.body}).write();
    const updatedFlight = db.get('flights').find({id}).value();
    console.log('updated Flight', updatedFlight);
    res.status(200);
    return res.json({
        status: 'success',
        message: 'Flight updated',
        data: updatedFlight
    })
}

export const deleteFlight = (req, res) => {
    console.log('params', req.params);
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
