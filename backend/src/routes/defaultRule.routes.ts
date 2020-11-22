import {Router} from 'express';
import * as dRuleCltr from '../controller/defaultRules.controller';
const router = Router();

router.get('/defaultRule',dRuleCltr.getDefaultRules);
router.get('/defaultRule/:id',dRuleCltr.getDefaultRuleById);
router.post('/defaultRule',dRuleCltr.createDefaultRule); 
router.delete('/defaultRule/:id',dRuleCltr.deleteDefaultRule);
router.put('/defaultRule/:id',dRuleCltr.updateDefaultRuleById);

export default router;