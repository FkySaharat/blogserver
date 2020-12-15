
import db from '../database/connection';

export class AccountService{

    private account = db.users;


    public async checkDuplicateUsername(username:string){
        const acc = await this.account.findOne({
            where: {username: username} 
        });
       
        //duplicate username
        if(acc){
            
            return true;
        }

        return false;
    }

    public async checkDuplicateEmail(email:string){
        const acc = await this.account.findOne({
            where: {email: email} 
        });

        //duplicate email
        if(acc){
            return true;
        }

        return false;
    
    }

}

