import { Router } from "express";
import { addClientController } from "../controllers/clientController.js";

export const router = Router()

router.post('/clientRegister', addClientController);
