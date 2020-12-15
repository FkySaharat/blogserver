

import { BlogModel } from '../models/blog';
import db from '../database/connection';
import { MemberBlogService } from './memberBlog.service';

export class BlogService{

    private blogDB = db.blogs;

    public async  getBlogbyId(blogId:string): Promise<any>{
        const blog:BlogModel =await this.blogDB.findOne({
            where:{id: blogId}
        }) as BlogModel;
       
        if(!blog){
            throw {message:"blog not found"};
        }

        return blog;
    }

    public async getAllBlogs(): Promise<any>{
        const blogs:BlogModel[] =await this.blogDB.findAll() as BlogModel[]
       
        if(!blogs){
            throw {message:"blogs not found"};
        }

        return blogs;
    }

    public async createBlog(newBlog:BlogModel, userId:string){
        const blog:BlogModel =await this.blogDB.create({
            ...newBlog
        })

        if(!blog.id){
            throw {message: "blog cannot create"}
        }

        
        return blog;
    }

    public async updateBlog(editedBlog:BlogModel, userId: string){
       
    }

    public async deleteBlog(blogId: string, userId:string){
    
    }


}