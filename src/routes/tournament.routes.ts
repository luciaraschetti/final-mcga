import {Router} from 'express';
import * as tournamentCtlr from '../controller/tournament.controller';
const router = Router();

router.get('/tournament',tournamentCtlr.getTournaments);
router.get('/tournament/:id',tournamentCtlr.getTournamentById);
router.post('/tournament',tournamentCtlr.createTournament); 
router.delete('/tournament/:id',tournamentCtlr.deleteTournamentById);
router.put('/tournament/:id',tournamentCtlr.updateTournamentById);

export default router;