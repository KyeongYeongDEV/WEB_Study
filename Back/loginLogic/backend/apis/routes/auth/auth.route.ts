import { Router } from "express";
import authController from "../../controllers/auth.controller";

const router = Router();

router.post("/code",authController.sendEmailCode);
router.post("/code/verify", authController.verifyEmailCode)

export default router; 