import express from 'express';
import { updateDoctor, deleteDoctor, getAllDoctors, getSingleDoctor, getDoctorProfile } from '../controllers/doctorController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';
import reviewRouter from './review.js';


const router = express.Router();

//nested route
router.use('/:doctorId/reviews', reviewRouter)

router.get('/', getAllDoctors);
router.get('/:id', getSingleDoctor);
router.put('/:id',authenticate, restrict(['therapist']), updateDoctor);
router.delete('/:id', authenticate, restrict(['therapist']), deleteDoctor);
router.get('/profile/me', authenticate, restrict(['therapist']), getDoctorProfile);

export default router;