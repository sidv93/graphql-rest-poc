import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';

const app = express();

app.set('port', 80);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from movies');
});

const server = app.listen(app.get('port'), () => console.log(`App is running in ${app.get('port')}`));

export default server;
