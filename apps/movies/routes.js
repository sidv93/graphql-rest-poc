import express from 'express';
const router = express.Router();
import { getMovies, addMovie, updateMovie, deleteMovie } from './handlers';

router.get('/', getMovies);
router.post('/', addMovie);
router.patch('/', updateMovie);
router.delete('/:id', deleteMovie);

export default router;
