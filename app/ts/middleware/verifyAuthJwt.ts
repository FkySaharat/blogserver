import db from '../database/connection';
import { Request, Response, NextFunction } from 'express';
import jwt, { decode } from 'jsonwebtoken';
const config = require('../config/auth.config')

export class VerifyAuthJwt {

    private user = db.users;

    public async verifyToken(req: Request, res: Response, next: NextFunction) {

         const authorization = req.headers.authorization as string;

        try {
            if(!authorization){
                res.status(403).send({message: 'No token provided'})
            }

            let token = authorization.split(' ').length>1 ?authorization.split(' ')[1]:authorization

            if (!token) {
                res.status(403).send({ message: "No token provided" })
            }

            jwt.verify(token, config.secret, (err: any, decocde: any) => {
                if (err) {
                    console.log(err)
                    return res.status(401).send({ message: "Unauthorized, token is invalid" })
                }

                res.locals = { ...res.locals, userId: decocde.id }

                next();
            })
            
        } catch (error) {
            console.log(error)
            res.status(401).send({ message: "Unauthorized" })
        }

    }
}

export default new VerifyAuthJwt()