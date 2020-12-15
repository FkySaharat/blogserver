
import { Request, Response, NextFunction } from 'express';
import { AccountService } from '../services/account.service';


export class VerifySignUp {


    public async checkDuplicateUsernameOrEmail(req: Request, res: Response, next: NextFunction) {
        console.log("verify Signup")
        const checkDuplicate = new AccountService();
        let duplicateEmail: boolean;
        let duplicateUsername: boolean;

        if (!req.body.username || !req.body.email) {
            res.status(401).send({ message: "username and email is required" })
        }

        try {
            duplicateUsername = await checkDuplicate.checkDuplicateUsername(req.body.username)
            duplicateEmail = await checkDuplicate.checkDuplicateEmail(req.body.email)
            if (duplicateEmail || duplicateUsername) {
                res.send(401).send({ message: duplicateEmail ? "email is invalid" : duplicateUsername ? "username is invalid" : "username and email is invalid" })
            }
            next()

        } catch (error) {
            res.status(401).send({ message: "signup is fail" })

        }



    }


}

export default new VerifySignUp()