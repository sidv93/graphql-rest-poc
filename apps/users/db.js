import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adaptor = new FileSync('./db.json');
const db = low(adaptor);
db.defaults({users: []}).write();

export default db;
