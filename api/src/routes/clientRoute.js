import { Router } from "express";
import { registerClientController } from "../controllers/clientController.js";

export const router = Router()

router.post('/clientRegister', registerClientController);
