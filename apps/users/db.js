import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import sampleUsers from './sampleUsers';

const adaptor = new FileSync('./db.json');
const db = low(adaptor);
db.defaults({users: sampleUsers}).write();

export default db;
