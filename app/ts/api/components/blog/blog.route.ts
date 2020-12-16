import {Application} from 'express';
import {default as BlogController} from './blog.controller';
import {default as VerifyAuthJwt } from '../../../middleware/verifyAuthJwt';
import {default as VerifyBlogMember } from '../../../middleware/verifyBlogMember';

class BlogRoute{

    
    public routes(app:Application,prefix:string):void{
        app.get(prefix+`/blogs`,BlogController.getBlogs);
        app.get(prefix+`/:id`,BlogController.getBlogById);
        app.post(prefix+`/`,[VerifyAuthJwt.verifyToken],BlogController.createBlog);
        app.patch(prefix+`/:id`,[VerifyAuthJwt.verifyToken,VerifyBlogMember.verifyMember],BlogController.updateBlog);
        app.delete(prefix+`/:id`,[VerifyAuthJwt.verifyToken,VerifyBlogMember.verifyMember],BlogController.deleteBlog);
    }

}

export default new BlogRoute();