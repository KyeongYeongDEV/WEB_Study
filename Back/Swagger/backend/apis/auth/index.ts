import {Router,Request, Response, NextFunction } from "express";
import authController from "../../controllers/auth.controller";
import guardMiddleware from "../../middlewares/guard.middleware";

const router = Router();


router.post("/code",authController.sendEmailCode);
router.post("/code/verify",authController.verifyEmailCode)

router.post("/join", authController.join);
router.post("/login",authController.login);

router.get("/",
    guardMiddleware, 
    (req:Request, res:Response, next : NextFunction)=>{
        res.status(200).send({msg : `i'm ${req.user?.name}`});
})

export default router;