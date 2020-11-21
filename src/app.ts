import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();


app.set('port',3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


export default app;