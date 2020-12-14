import db from '../database/connection';
import { Request, Response, NextFunction } from 'express';


export class VerifySignUp{

    private role =db.roles;
    private user =db.users;

    public checkDuplicateUsernameOrEmail(req:Request, res:Response, next: NextFunction){
        
        console.log("verify Signup")
        next();
    }

    // public checkRolesExisted(req:Request, res:Response, next: NextFunction){
    //     next();
    // }

}

export default new VerifySignUp()