import "dotenv/config"
import express from 'express';
import cors from 'cors';
import db from './config/mongo'
import { router } from "./routes";
import { logMiddleware } from "./middleware/log";


const PORT = process.env.PORT || 3002;
const app = express(); // Se inicialisa express

app.use(cors())
app.use(express.json())
app.use(logMiddleware)
app.use(router)

db().then(() => console.log('DB Conected'))

app.listen(PORT, () => { console.log(`Server on port ${PORT}`);})