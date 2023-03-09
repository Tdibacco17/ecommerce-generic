import dotenv from "dotenv";
dotenv.config();

export const environment = {
    //conection
    PORT: process.env.PORT,
    HOST: process.env.HOST,

    //nodemailer
    EMAIL_SERVICE: process.env.EMAIL_SERVICE,
    EMAIL_USERNAME: process.env.EMAIL_USERNAME,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    EMAIL_SENDER: process.env.EMAIL_SENDER,

    //jwt
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_ALGORITHM: process.env.JWT_ALGORITHM,
    JWT_EXPIRE: process.env.JWT_EXPIRE,

    //hash
    HASH_SALT: process.env.HASH_SALT,

    //sequelize
    PG_HOST: process.env.PG_HOST,
    PG_DATABASE: process.env.PG_DATABASE,
    PG_USER: process.env.PG_USER,
    PG_PASSWORD: process.env.PG_PASSWORD,
    PG_PORT: process.env.PG_PORT,
}