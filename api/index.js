import express from 'express';
import cors from "cors"
import { environment } from './src/helpers/config.js';
import { sequelize as db } from './db.js';

import { router as userRoutes } from "./src/routes/userRoute.js"
import { router as clientRoutes } from "./src/routes/clientRoute.js"

const server = express()

//middlewares
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

//acceso a rutas
server.use("/", userRoutes);
server.use("/", clientRoutes);
// server.use("/", AdminRoutes);
// server.use("/", EmailRoutes);

//conexiones
const PORT = environment.PORT || 4000;
const HOST = environment.HOST || "0.0.0.0";

db.sync({ force: true }).then(() => {
    console.log("database coneccted!");

    server.listen(PORT, HOST, () => {
        console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
    });
});
