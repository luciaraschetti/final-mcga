import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import gameRoutes from './routes/game.routes';
import defaultRulesRoutes from './routes/defaultRule.routes';
import gameRatingRoutes from './routes/gameRating.routes';
import tournamentRoutes from './routes/tournament.routes';
import roleRoutes from './routes/Role.routes';

const app = express();

app.set('port', 3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(userRoutes);
app.use(gameRoutes);
app.use(defaultRulesRoutes);
app.use(gameRatingRoutes);
app.use(tournamentRoutes);
app.use(roleRoutes);

export default app;