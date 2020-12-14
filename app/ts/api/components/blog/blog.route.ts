import {Application} from 'express';
import {default as BlogController} from './blog.controller';

class BlogRoute{

    public routes(app:Application,prefix:string):void{
        app.get(prefix+`/blogs`,[BlogController.getBlogs]);
        app.get(prefix+`/:id`,[BlogController.getBlogById]);
        app.post(prefix+`/`,BlogController.createBlog);
        app.patch(prefix+`/:id`,[BlogController.updateBlogById]);
        app.delete(prefix+`/:id`,[BlogController.deleteBlogById]);
    }

}

export default new BlogRoute();