
import db from '../database/connection';

export class MemberBlogService{
    private memberblog = db.assoUsersBlogs
    
    public async addMemberbyUserId(userId:string,blogId:string,roleId:number){
        this.memberblog.create({
            userId:userId,
            blogId:blogId,
            roleId:roleId
        })
    }

    public async addMemberbyEmail(){

    }

    public async checkExistedMember(userId:string,blogId:string){

    }

    public async getMember(){

    }

    public async deleteMember(){

    }


}