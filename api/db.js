import { environment } from "./src/helpers/config.js";
import { Sequelize } from "sequelize";
import pg from 'pg';

import { modelUser } from "./src/models/user/User.js";
import { modelCart } from "./src/models/cart/Cart.js";
import { modelPayment } from "./src/models/payment/Payment.js";
import { modelProduct } from "./src/models/product/Product.js";
import { modelRole } from "./src/models/roles/Role.js";

const { PG_USER, PG_PASSWORD, PG_HOST, PG_PORT, PG_DATABASE } = environment;

export const sequelize = new Sequelize(`postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`, {
    logging: false,
    native: false,
    dialectModule: pg
});

modelUser(sequelize)
modelCart(sequelize)
modelPayment(sequelize)
modelProduct(sequelize)
modelRole(sequelize)

//faltan relaciones

export const { User, Cart, Role, Product, Payment } = sequelize.models;