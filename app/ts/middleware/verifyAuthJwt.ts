import db from '../database/connection';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
const config = require('../config/auth.config')

export class VerifyAuthJwt{

    private user = db.users;

    public async verifyToken(req:Request, res:Response, next: NextFunction){
        let token: string = req.headers["x-access-token"] as string;

        if(!token){
            res.status(403).send({message:"No token provided"})
        }
        
        // jwt.verify(token, config.secret,(err: any,decode: string) =>{

        //    next() 
        // })
        
    }
}