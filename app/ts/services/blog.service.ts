import {BlogModel} from '../models/blog';
import {MOCKBLOGS} from '../mock/blog';

export class BlogService{

    async  getBlogbyId(blogId:string){
        // let blog:BlogModel;

        // await new Promise((resolve) => {
        //     setTimeout(() => resolve('waiting for 5s'), 5000);
        // });

        // blog = MOCKBLOGS.find((item) => item.id === blogId.toString()) as BlogModel;
        
        // return blog;
    }

    async getAllBlogs(){
        // let blogs : BlogModel[];

        // await new Promise((resolve) => {
        //     setTimeout(() => resolve('waiting for 5s'), 5000);
        //   });

        // blogs = MOCKBLOGS as BlogModel[];

        // return blogs;
    }

    async createBlog(newBlog:BlogModel){
        // await new Promise((resolve) => {
        //     setTimeout(() => resolve('waiting for 5s'), 5000);
        //   });
        //   console.log(newBlog);
        
    
    }

    async updateBlog(blogId:string,blog:BlogModel){
        // await new Promise((resolve) => {
        //     setTimeout(() => resolve('waiting for 5s'), 5000);
        //   });

        

    }

    async deleteBlog(blogId: string){
        // await new Promise((resolve) => {
        //     setTimeout(() => resolve('waiting for 5s'), 5000);
        //   });

        // let afterDel: BlogModel[] = MOCKBLOGS.filter((blog)=> blog.id != blogId) as BlogModel[];

        // return afterDel;
    }


}