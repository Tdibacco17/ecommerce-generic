import { environment } from "./src/helpers/config.js";
import { Sequelize } from "sequelize";
import pg from 'pg';

import { modelUser } from "./src/models/user/User.js";
import { modelClient } from "./src/models/client/Client.js";
import { modelAddress } from "./src/models/addresses/Addresses.js";

const { PG_USER, PG_PASSWORD, PG_HOST, PG_PORT, PG_DATABASE } = environment;

export const sequelize = new Sequelize(`postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`, {
    logging: false,
    native: false,
    dialectModule: pg
});

modelUser(sequelize)
modelClient(sequelize)
modelAddress(sequelize)

export const { User, Client, Address } = sequelize.models;

console.log(sequelize.models)

//relaciones

// Un usuario tiene un cliente
User.hasOne(Client, { as: 'client' });
// Un cliente pertenece a un usuario
Client.belongsTo(User);
// Un cliente tiene varias direcciones
Client.hasMany(Address, { as: 'addresses' });
// Una dirección pertenece a un cliente
Address.belongsTo(Client);