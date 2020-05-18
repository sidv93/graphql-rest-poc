import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import sampleMovies from './sampleMovies';

const adaptor = new FileSync('./db.json');
const db = low(adaptor);
db.defaults({movies: sampleMovies}).write();

export default db;
