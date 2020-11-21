import {Router} from 'express';
import * as gameRatingCtlr from '../controller/gameRating.controller';
const router = Router();

router.get('/gameRating',gameRatingCtlr.getGamesRating);
router.get('/gameRating/:id',gameRatingCtlr.getGameRatingById);
router.post('/gameRating',gameRatingCtlr.createGameRating); 
router.delete('/gameRating/:id',gameRatingCtlr.deleteGameRatingById);
router.put('/gameRating/:id',gameRatingCtlr.updatedGameRatingByID);

export default router;