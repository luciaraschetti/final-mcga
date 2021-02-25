import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import gameRoutes from './routes/game.routes';
import defaultRulesRoutes from './routes/defaultRule.routes';
import gameRatingRoutes from './routes/gameRating.routes';
import tournamentRoutes from './routes/tournament.routes';
import AuthController from './routes/auth'
import roleRoutes from './routes/Role.routes';

const app = express();

// settings
app.set('port', 4000 || process.env.PORT);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(userRoutes);
app.use(gameRoutes);
app.use(defaultRulesRoutes);
app.use(gameRatingRoutes);
app.use(tournamentRoutes);
app.use(roleRoutes);
app.use('/api/auth', AuthController);

export default app;