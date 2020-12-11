import express,{Application} from 'express';
import cors from 'cors'
import bodyParser, { urlencoded } from  'body-parser'
import {default as WebRoute} from './api/routers/web';
const db = require('./database/connection')


class App {

    public express:Application;
    private role = db.role;

    constructor() {
        this.databaseInit();
        this.express =express();
        this.middleware();
        this.routers();
        this.express.listen(3000,()=>{console.log("starting server is sucess")})
        
    }

    private middleware():void{
        this.express.use(cors({origin: "*"}))
        this.express.use(bodyParser.json())
    }

    private routers():void{
        WebRoute.routes(this.express);
    }

    private databaseInit():void{
       db.sequelize.authenticate().then(async()=>{
            try {
                await db.sequelize.sync({force:true})
            } catch (error) {
                console.log(error.message)
            }
        })
        this.initail()

    }

    private initail(){
        this.role.create({
            name: "user"
          });
         
        this.role.create({
            name: "moderator"
          });
        this.role.create({
            name: "admin"
          });
    }
}

export default new App().express; 
