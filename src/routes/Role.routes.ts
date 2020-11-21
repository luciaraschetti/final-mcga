import {Router} from 'express';
import * as roleCltr from '../controller/role.controller'
const router = Router();

router.get('/role',roleCltr.getRoles);
router.get('/role/:id',roleCltr.getRoleById);
router.post('/role',roleCltr.createRole); 
router.delete('/role/:id',roleCltr.deleteRoleById);
router.put('/role/:id',roleCltr.updateTournamentById);

export default router;

