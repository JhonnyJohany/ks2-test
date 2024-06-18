import { Router } from "express";
import { AllUser } from "../controller/userController.js";

const router = new Router();

router.get("/users", AllUser.getAllUserController);

export default router;
