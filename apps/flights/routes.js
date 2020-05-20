import express from 'express';
const router = express.Router();
import { getFlights, addFlight, updateFlight, deleteFlight, getFlight } from './handlers';

router.get('/:id', getFlight);
router.get('/', getFlights);
router.post('/', addFlight);
router.patch('/', updateFlight);
router.delete('/:id', deleteFlight);

export default router;
