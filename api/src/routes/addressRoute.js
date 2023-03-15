import { Router } from "express";
import { registerAddressController } from "../controllers/addressController.js";

export const router = Router()

router.post('/addressRegister', registerAddressController);
