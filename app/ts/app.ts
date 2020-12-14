import express, { Application } from 'express';
import cors from 'cors'
import bodyParser, { urlencoded } from 'body-parser'
import { default as WebRoute } from './api/routers/web';

import db from './database/connection';

class App {

    public express: Application;
    private role = db.roles;
    private user = db.users;
    private blog = db.blogs;

    constructor() {
        this.express = express();
        this.middleware();
        this.routers();
        this.databaseInit();
        this.express.on('ready', () => {
            this.express.listen(3000, () => { console.log("starting server is sucess") })
        })

    }



    private middleware(): void {
        this.express.use(cors({ origin: "*" }))
        this.express.use(bodyParser.json())
    }

    private routers(): void {
        WebRoute.routes(this.express);
    }

    private async  databaseInit() {
        try {
            await db.sequelize.authenticate()
            await db.sequelize.sync({ force: true })
            await this.initRole()
            this.express.emit('ready')
        } catch (error) {
            console.log('Unable to connect to the database', error)
        }

    }

    private async initRole() {
        await this.role.create({
            name: "user"
        });

        await this.role.create({
            name: "moderator"
        });
        await this.role.create({
            name: "admin"
        });
        await this.user.create({
            username: "test",
            password: 'test',
            firstName: "test",
            lastName: "test",
            email: "test@test.com"
        })
        await this.blog.create({
            header: "test",
            body: "test",

        })
    }
}

export default new App().express; 
