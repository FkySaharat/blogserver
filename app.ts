import express,{Application} from 'express';
import cors from 'cors'
import {default as WebRoute} from './api/routers/web';


class App {

    public express:Application;
    

    constructor() {
         
        this.express =express();
        this.middleware();
        this.routers();
        this.express.listen(3000,()=>{console.log("starting server is sucess")})
        
    }

    private middleware():void{
        this.express.use(cors({origin: "*"}))
    }

    private routers():void{
        WebRoute.routes(this.express);
    }
}

export default new App().express; 
