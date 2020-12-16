

import { BlogModel } from '../models/blog';
import db from '../database/connection';
import { MemberBlogService } from './memberBlog.service';

export class BlogService{

    private blog = db.blogs;

    public async  getBlogbyId(blogId:string): Promise<any>{
        const blog:BlogModel =await this.blog.findOne({
            where:{id: blogId}
        }) as BlogModel;
       
        if(!blog){
            throw {message:"blog not found"};
        }

        return blog;
    }

    public async getAllBlogs(): Promise<any>{
        const blogs:BlogModel[] =await this.blog.findAll() as BlogModel[]
       
        if(!blogs){
            throw {message:"blogs not found"};
        }

        return blogs;
    }

    public async createBlog(newBlog:BlogModel, userId:string){
        const blog:BlogModel =await this.blog.create({
            ...newBlog
        })

        if(!blog.id){
            throw {message: "blog cannot create"}
        }
        
        return blog;
    }

    public async updateBlogById(editedBlog:BlogModel){
        let obj ={
            header: editedBlog.header,
            body: editedBlog.body
        }

        const result = await this.blog.update(obj,{
            where:{
                id: editedBlog.id
            }
        })
        console.log(result)
        return true;
    }

    public async deleteBlogById(blogId: string){
        
    
        await this.blog.destroy({
            where:{
                id:blogId
            }
        })

        return true;
    }


}