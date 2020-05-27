import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import sampleFlights from './sampleFlights';

const adaptor = new FileSync('./db.json');
const db = low(adaptor);
db.defaults({flights: sampleFlights}).write();

export default db;
