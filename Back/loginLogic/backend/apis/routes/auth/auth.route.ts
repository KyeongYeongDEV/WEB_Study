import { Router } from "express";

import AuthService from "../../../services/auth.service";
import MailService from "../../../services/mail.service";
import AuthController from "../../controllers/auth.controller";

const authService = new AuthService();
const mailService = new MailService();
const authController = new AuthController(authService, mailService);

const router = Router();

router.post("/code",authController.sendEmailCode.bind(authController));
router.post("/code/verify", authController.verifyEmailCode.bind(authController))

export default router;  