import express from 'express';
const router = express.Router();
import { getUsers, addUser, updateUser, deleteUser } from './handlers';

router.get('/', getUsers);
router.post('/', addUser);
router.patch('/', updateUser);
router.delete('/:id', deleteUser);

export default router;
