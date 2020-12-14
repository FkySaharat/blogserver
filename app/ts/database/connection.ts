import * as Sequelize from 'sequelize';
import { DB } from '../models';
import { userFactory } from '../models/user';
import { blogFactory } from '../models/blog';
import { roleFactory } from '../models/role';
import { dbConfig } from '../config/db.config';
import { tagFactory } from '../models/tag';


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