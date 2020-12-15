import { NextFunction, Response, Request } from "express";
import { MemberBlogService } from "../services/memberBlog.service";


export class VerifyRoleService{

    public async verifyRole(req: Request, res: Response, next: NextFunction){
        const userId = res.locals.userId
        const blogId = req.params.blogId

        
        try {
            const memberBlogServie = new MemberBlogService()
            const role = memberBlogServie.checkExistedMember(userId,blogId)
        } catch (error) {
            
        }
    }
}