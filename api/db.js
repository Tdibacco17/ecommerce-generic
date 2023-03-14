import { environment } from "./src/helpers/config.js";
import { Sequelize } from "sequelize";
import pg from 'pg';

import { UserModel } from "./src/models/UserModel.js";
import { ClientModel } from "./src/models/ClientModel.js";
import { AddressModel } from "./src/models/AddressModel.js";

const { PG_USER, PG_PASSWORD, PG_HOST, PG_PORT, PG_DATABASE } = environment;

export const sequelize = new Sequelize(`postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`, {
    logging: false,
    native: false,
    dialectModule: pg
});

UserModel(sequelize)
ClientModel(sequelize)
AddressModel(sequelize)

export const { User, Client, Address } = sequelize.models;

//relaciones

// Un usuario tiene un cliente
User.hasOne(Client, { as: 'client', foreignKey: "User_ID" });
// Un cliente pertenece a un usuario
// Client.belongsTo(User);
// Un cliente tiene varias direcciones
Client.hasMany(Address, { as: 'address', foreignKey: "User_ID" });
// Una dirección pertenece a un cliente
// Address.belongsTo(Client);