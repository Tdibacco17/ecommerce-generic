import { Router } from "express";
import { registerUserController, loginUserController, updatePasswordUserController } from "../controllers/userController.js";

export const router = Router()

router.post('/userRegister', registerUserController);
router.post('/userLogin', loginUserController)
router.put('/userUpdatePassword', updatePasswordUserController)