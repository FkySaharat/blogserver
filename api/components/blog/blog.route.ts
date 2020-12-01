import {Application} from 'express';
import {default as BlogController} from './blog.controller';

class BlogRoute{

    public routes(app:Application,prefix:string):void{
        app.get(prefix+`/blogs`,[BlogController.getBlogs]);
        app.get(prefix+`/blog/:id`,[BlogController.getBlogById]);
        app.post(prefix+`/blog`,[BlogController.createBlog]);
        app.patch(prefix+`/blog/:id`,[BlogController.updateBlogById]);
        app.delete(prefix+`/blog/:id`,[BlogController.deleteBlogById]);
    }

}

export default new BlogRoute();