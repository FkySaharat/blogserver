import { Application, Request, Response } from "express";
import {default as AuthController } from "./auth.controller";
import {default as  VerifySignUp } from "../../../middleware/verifySignUp";
import { NextFunction } from "express-serve-static-core";

class AuthRoute{
    public routes(app:Application,prefix:string){
        app.use((req: Request, res: Response, next: NextFunction)=>{
            res.header(
                "Access-Control-Allow-Headers",
                "x-access-token, Orgin, Content-Type, Accept"
            )
            next();
        })
        app.post(prefix+`/signup`,[VerifySignUp.checkDuplicateUsernameOrEmail],AuthController.signUp)
        app.post(prefix+`/signin`,AuthController.signIn)
    }
}

export default new AuthRoute()