import express from 'express';
import { register, login } from '../controllers/authControllers.js';

const router = express.Router();

router.get('/login', login);
router.post('/register', register);

export default router;