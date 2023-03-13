import { environment } from "./src/helpers/config.js";
import { Sequelize } from "sequelize";
import pg from 'pg';

import { modelUsers } from "./src/models/users/Users.js";
import { modelClient } from "./src/models/client/Client.js";
import { modelAddresses } from "./src/models/addresses/Addresses.js";
// import { modelCart } from "./src/models/cart/Cart.js";
// import { modelPayment } from "./src/models/payment/Payment.js";
// import { modelProduct } from "./src/models/product/Product.js";

const { PG_USER, PG_PASSWORD, PG_HOST, PG_PORT, PG_DATABASE } = environment;

export const sequelize = new Sequelize(`postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`, {
    logging: false,
    native: false,
    dialectModule: pg
});

//inicializacion
modelUsers(sequelize)
modelClient(sequelize)
modelAddresses(sequelize)

// modelCart(sequelize)
// modelPayment(sequelize)
// modelProduct(sequelize)

export const { User, Client, Address } = sequelize.models;

console.log(sequelize.models)

//relaciones



// Product.belongsToMany(Cart, { through: "Product_Cart" })
// Cart.belongsToMany(Product, { through: "Product_Cart" })