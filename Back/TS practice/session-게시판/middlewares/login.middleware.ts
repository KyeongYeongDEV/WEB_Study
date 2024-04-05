import {Request, Response, NextFunction} from "express";

function isAuthenticated(req:Request, res :Response, next: NextFunction){
    if(req.session && req.session.user){
        next();
    }else{
        res.redirect("/user/login");
    }
}

export default isAuthenticated;