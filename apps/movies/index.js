import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import routes from './routes';

const app = express();

app.set('port', 80);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(routes);

const server = app.listen(app.get('port'), () => console.log(`Movies service is running in ${app.get('port')}`));

export default server;
