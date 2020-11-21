import {Router} from 'express';
import * as userCltr from '../controller/user.controller'
const router = Router();

router.get('/user',userCltr.getUsers);
router.get('/user/:id',userCltr.getUserbyId);
router.post('/user',userCltr.createUser); 
router.delete('/user/:id',userCltr.deleteUserById);
router.put('/user/:id',userCltr.updateUserById);

export default router;