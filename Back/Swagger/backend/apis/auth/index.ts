import {Router } from "express";
import authController from "../../controllers/auth.controller";

const router = Router();


router.post("/code",)
router.post("/code/verify",)

router.post("/join", authController.join);
router.post("/login",authController.login);


export default router;