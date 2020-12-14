import {Application} from 'express';
import {default as BlogRoute} from '../components/blog/blog.route';
import authRoute from '../components/auth/auth.route';

class WebRoute {
    public routes(app:Application):void{
        authRoute.routes(app,'/auth');
        BlogRoute.routes(app,'/blog');
    }
}

export default new WebRoute();