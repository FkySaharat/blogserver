import {Application} from 'express';
import {default as BlogRoute} from '../components/blog/blog.route';

class WebRoute {
    public routes(app:Application):void{
        const prefix ='/api';
        BlogRoute.routes(app,'');

    }
}

export default new WebRoute();