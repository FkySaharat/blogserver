import { UserModel } from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../database/connection";
const config = require('../config/auth.config')

export class AuthService{

    public async signUpService(newUser: UserModel){
        let user = await db.users.create({
            username: newUser.username,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email:newUser.email,
            password: bcrypt.hashSync(newUser.password, 8),
        });

        return user;
    }

    public async signInService(username:string,password:string){
        let user: UserModel = await db.users.findOne({
            where: {
                username:username
            }
        })

        if (!user) {
            console.log("user not found")
            throw {message:"user not found!"};
        }

        let passwordIsValid = await bcrypt.compareSync(
            password,
            user.password
        )

        if (!passwordIsValid) {
            console.log("password invalid")
            throw {
                accessToken: null,
                message: "Invalid Password!"
            }
          
        }

        let token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 //24 hrs
        })

        return {
            id: user.id,
            username: user.username,
            email: user.email,
            accessToken: token
        }
    }

    

}

