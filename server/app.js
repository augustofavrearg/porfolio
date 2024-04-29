// app.js
import express from 'express';
import routerSkills from './routes/skills.js';
import routerProject from './routes/project.js';
import routerPost from './routes/post.js';
import routerCv from './routes/cv.js';
import morgan from 'morgan';
import http, { METHODS } from 'http'; // Importa el módulo http de Node.js
import cors from 'cors';
import { FRONTEND_URL } from './config.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

const corsOptions = {
    origin: FRONTEND_URL,
    METHODS: 'GET,HEAD,PUT,PATCH,DELETE',
    credentials: true,
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use('/apiSkill', routerSkills)
app.use('/apiProject', routerProject)
app.use('/apiPost', routerPost)
app.use('/apiCv', routerCv)

// Configura el tiempo de espera del servidor HTTP
const server = http.createServer(app);
server.setTimeout(800000); // 10 minutos en milisegundos


export default app;
