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
    private assoUsersBlog =db.assoUsersBlogs;

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
            name: "cowritter"
        });
        await this.role.create({
            name: "writter"
        });
        await this.user.create({
            id:"user01",
            username: "user",
            password: 'user',
            firstName: "user",
            lastName: "user",
            email: "user@user.com"
        })
        await this.user.create({
            username: "admin",
            password: 'admin',
            firstName: "admin",
            lastName: "admin",
            email: "admin@user.com"
        })
        await this.user.create({
            id:"user02",
            username: "user2",
            password: 'user2',
            firstName: "user2",
            lastName: "user2",
            email: "user2@user.com"
        })
        await this.blog.create({
            id:"blog01",
            header: "blog",
            body: "blog",
        })
        await this.blog.create({
            id:"blog02",
            header: "blog2",
            body: "blog2",
        })
        await this.assoUsersBlog.create({
            userId: "user01",
            blogId: "blog01",
            roleId: 1
        })


    }
}

export default new App().express; 
