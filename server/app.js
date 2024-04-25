// app.js
import express from 'express';
import routerSkills from './routes/skills.js';
import routerProject from './routes/project.js';
import routerPost from './routes/post.js';
import routerCv from './routes/cv.js';
import morgan from 'morgan';
import http from 'http'; // Importa el módulo http de Node.js

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/apiSkill', routerSkills)
app.use('/apiProject', routerProject)
app.use('/apiPost', routerPost)
app.use('/apiCv', routerCv)

// Configura el tiempo de espera del servidor HTTP
const server = http.createServer(app);
server.setTimeout(800000); // 10 minutos en milisegundos


export default app;
