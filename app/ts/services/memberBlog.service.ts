
import db from '../database/connection';
import { Op } from 'sequelize';

export class MemberBlogService {
    private memberOfBlog = db.assoUsersBlogs

    public async addMemberbyUserId(userId: string, blogId: string, roleId: number) {
        const newMember =  await this.memberOfBlog.create({
            userId: userId,
            blogId: blogId,
            roleId: roleId
        })

        if(!newMember){
            throw {message:"add new Member is failed"}
        }

        return newMember;
    }

    public async addMemberbyEmail() {

    }

    public async checkExistedMember(userId: string, blogId: string) {

       const res=await this.memberOfBlog.findOne({
            where: {
                [Op.and]: [
                    { userId: userId },
                    { blogId: blogId }
                ]

            }
        })

        console.log(res)

        return true;
    }

    public async getMember(blogId:string) {

    }

    public async deleteMember(blogId:string) {

        await this.memberOfBlog.destroy({
            where:{
                blogId:blogId
            }
        })

        return true;
    }


}