import { NextFunction, Response, Request } from "express";
import { MemberBlogService } from "../services/memberBlog.service";


export class VerifyBlogMember{

    public static memberBlogServie: MemberBlogService;

    constructor(){
        VerifyBlogMember.memberBlogServie = new MemberBlogService()
    }

    public async verifyMember(req: Request, res: Response, next: NextFunction){
        const userId = res.locals.userId 
        const blogId = req.params.id|| req.body.id

        if(!userId){
            res.status(401).send({message:"unauthorized for blog"})
        }

        if(!blogId){
            res.status(403).send({meassage:"specific blog is required"})
        }
        
        try {
            ///
            const role = VerifyBlogMember.memberBlogServie.checkExistedMember(userId,blogId)

            if(!role){
               
                res.status(401).send({message:"no permission for this blog"})
            }
            
            next()

        } catch (error) {
            console.log(error)
            res.status(403).send({meassage:"verify permission was failed"})
        }

    }
}

export default new VerifyBlogMember();