import { Router,Request, Response, NextFunction } from "express";

import AuthService from "../../../services/auth.service";
import MailService from "../../../services/mail.service";
import AuthController from "../../controllers/auth.controller";

const authService = new AuthService();
const mailService = new MailService();
const authController = new AuthController(authService, mailService);

const router = Router();

router.post("/code",authController.sendEmailCode);
router.post("/code/verify", authController.verifyEmailCode);

router.post("/login", authController.login);
router.post("/signup", authController.signup);

export default router;  