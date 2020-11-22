import {Router} from 'express';
import * as gameCtlr from '../controller/game.controller';
const router = Router();

router.get('/game',gameCtlr.getGames);
router.get('/game/:id',gameCtlr.getGameById);
router.post('/game',gameCtlr.createGame); 
router.delete('/game/:id',gameCtlr.deleteGameById);
router.put('/game/:id',gameCtlr.updateGameById);

export default router;