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

const movies = [
    {
        name: 'Harry potter',
        director: 'James Yates',
        hero: 'Daniel Radcliffe',
        year: 2000
    },
    {
        name: 'Gone Girl',
        director: 'David Fincher',
        hero: 'Ben Affleck',
        year: 2014
    },
    {
        name: 'Avengers',
        director: 'Dir',
        hero: 'Robert Downy Junior',
        year: '2019'
    }
]
app.get('/', (req, res) => {
    res.status(200);
    res.json({
        status: 'success',
        message: 'Movies',
        data: movies
    });
});

const server = app.listen(app.get('port'), () => console.log(`App is running in ${app.get('port')}`));

export default server;
