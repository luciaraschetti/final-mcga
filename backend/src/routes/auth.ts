import { Router } from 'express';
const router = Router();

import { signup, signin } from '../controller/auth'
import { TokenValidation } from '../libs/verifyToken'

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', TokenValidation)

export default router;
