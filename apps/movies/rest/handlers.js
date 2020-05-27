import db from './db';

export const addMovie = (req, res) => {
    const newMovie = {
        id: db.get('movies').size().value() + 1,
        ...req.body
    };
    db.get('movies').push(newMovie).write();
    res.status(200);
    return res.json({
        status: 'success',
        message: 'Movie added',
        data: newMovie
    });
};

export const getMovies = (req, res) => {
    const { offset = 0, limit = 10, title, year, director } = req.query;
    const movies = db.get('movies').value()
        .filter(item => {
            let flag = true;
            if (title) {
                flag = flag && item.title.includes(title);
            }
            if(director) {
                flag = flag && item.director.includes(director);
            }
            if (year) {
                flag = flag && (item.year == year);
            }
            return flag;
        })
        .slice(offset, (+offset) + (+limit));
    res.status(200);
    return res.json({
        status: 'success',
        message: 'Movies',
        data: movies
    });
}

export const updateMovie = (req, res) => {
    const { id } = req.body;
    db.get('movies').find({ id }).update({ ...req.body }).write();
    const updatedMovie = db.get('movies').find({ id }).value();
    res.status(200);
    return res.json({
        status: 'success',
        message: 'Movie updated',
        data: updatedMovie
    })
}

export const deleteMovie = (req, res) => {
    const { id } = req.params;
    const movie = db.get('movies').find({id: +id}).value();
    db.get('movies').remove({id: +id}).write();
    res.status(200);
    return res.json({
        status: 'success',
        message: 'Movie removed',
        data: movie
    })
}
