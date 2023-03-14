import { Router } from "express";
import { addUserController, loginUserController } from "../controllers/userController.js";

export const router = Router()

router.post('/userRegister', addUserController);
router.post('/userLogin', loginUserController)