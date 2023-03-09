import express from 'express';
import cors from "cors"
import { environment } from './src/helpers/config.js';
import { sequelize as db } from './db.js';

const server = express()

//middlewares
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

//acceso a rutas
// server.use("/", UserRoutes);
// server.use("/", UserLoginRoutes);
// server.use("/", AdminRoutes);
// server.use("/", EmailRoutes);

//conexiones
const PORT = environment.PORT || 4000;
const HOST = environment.HOST || "0.0.0.0";

db.sync({ force: false }).then(() => {
    console.log("database coneccted!");

    server.listen(PORT, HOST, () => {
        console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
    });
});
