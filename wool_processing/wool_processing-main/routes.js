import express from 'express';
import { shearing, scouring, sorting, combing, carding, dyeing, spinning} from './index2.js';

const router = express.Router();

router.post('/shearing', shearing);
router.post('/scouring', scouring);
router.post('/sorting', sorting);
router.post('/combing', combing);
router.post('/carding', carding);
router.post('/dyeing', dyeing);
router.post('/spinning', spinning);

export default router;
