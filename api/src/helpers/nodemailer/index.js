import nodemailer from "nodemailer"
import { environment } from "../config";

export const transporter = nodemailer.createTransport({
    host: environment.EMAIL_SERVICE,
    port: 587,
    secure: false,
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: environment.EMAIL_USERNAME,
        pass: environment.EMAIL_PASSWORD,
    },
});