import * as Sequelize from 'sequelize';
import { DB } from '../models';
import { userFactory } from '../models/user';
import { blogFactory } from '../models/blog';
import { roleFactory } from '../models/role';
import { dbConfig } from '../config/db.config';
import { tagFactory } from '../models/tag';
import { assoUsersBlogFactory } from '../models/assoUsersBlogs';
import { assoBlogsTagsFactory } from '../models/assoBlogsTags';


export class database {
    public db: DB = {}
    private sequelize = new Sequelize.Sequelize(
        dbConfig.database,
        dbConfig.username,
        dbConfig.password,
        {
            dialect: 'mssql',
            dialectOptions: {
                options: {
                    validateBulkLoadParameters: false
                }
            },
            host: dbConfig.host,
            port: dbConfig.port as number
        });

    constructor() {
        this.db.sequelize = this.sequelize;
        this.db.Sequelize = Sequelize;
        this.db.users =  userFactory(this.sequelize);
        this.db.roles =  roleFactory(this.sequelize);
        this.db.blogs =  blogFactory(this.sequelize);
        this.db.tags =  tagFactory(this.sequelize);
        this.db.assoUsersBlogs = assoUsersBlogFactory(this.sequelize);
        this.db.assoBlogsTags= assoBlogsTagsFactory(this.sequelize);

        //one user has many blogs, one blog has many users
        this.db.users.belongsToMany(this.db.blogs,{through:this.db.assoUsersBlogs})
        this.db.blogs.belongsToMany(this.db.users,{through:this.db.assoUsersBlogs})

        //one roles has many assoUserBlog, assoUserBlog has only one roles
        this.db.roles.hasMany(this.db.assoUsersBlogs)
        this.db.assoUsersBlogs.belongsTo(this.db.roles)

        this.db.blogs.belongsToMany(this.db.tags,{through: this.db.assoBlogsTags})
        this.db.tags.belongsToMany(this.db.blogs,{through: this.db.assoBlogsTags})
   
    }
}

export default new database().db;

// export const sequelize = new Sequelize.Sequelize(
//     dbConfig.database,
//     dbConfig.username,
//     dbConfig.password,
//     {
//         dialect: 'mssql',
//         dialectOptions: {
//             options: {
//                 validateBulkLoadParameters: false
//             }
//         },
//         host: dbConfig.host,
//         port: dbConfig.port as number
//     },

// )

// const db: DB = {};
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// db.users = userFactory(sequelize);
// db.roles = roleFactory(sequelize);
// db.blogs = blogFactory(sequelize);
// db.tags = TagFactory(sequelize);

// module.exports = db;