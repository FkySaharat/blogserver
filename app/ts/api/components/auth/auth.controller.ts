import { Request, Response } from "express";

import { Op, Sequelize } from "sequelize/types";
import {  AuthService } from "../../../services/auth.service";
import { UserModel } from "../../../models/user";


export class AuthController {
    public static authService: AuthService;

    constructor(){
        AuthController.authService = new AuthService();

    }

    public async signUp(req: Request, res: Response) {
        console.log('sign up')
        try {
            let user: UserModel = {
                id: undefined,
                username: req.body.username,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
            }

            await AuthController.authService.signUpService(user)

            res.status(200).send({ message: "User was registered successfully!" })
        } catch (error) {
            res.status(500).send({ message: error.message });
        }


    }

    public async signIn(req: Request, res: Response) {
        console.log('sign in')
        try {

           let result = await AuthController.authService.signInService(req.body.username, req.body.password)
            console.log(result)
            res.status(200).send(result)

        } catch (error) {
            res.status(500).send({ message: error.message });
        }

    }
}

export default new AuthController() 