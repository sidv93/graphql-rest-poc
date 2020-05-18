import express from 'express';
const router = express.Router();
import { getFlights, addFlight, updateFlight, deleteFlight } from './handlers';

router.get('/', getFlights);
router.post('/', addFlight);
router.patch('/', updateFlight);
router.delete('/:id', deleteFlight);

export default router;
