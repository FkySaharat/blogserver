import * as Sequelize from 'sequelize';
import { DB } from '../models';
import {userFactory}  from '../models/user';
import { Blog } from '../models/blog';
import { roleFactory } from '../models/role';


export const sequelize = new Sequelize.Sequelize(
    //...
    {
        dialect: 'mssql',
        dialectOptions:{
            options: {
              validateBulkLoadParameters: false
              }
          },
        host: '...',
        port: 1433
    },
    
)

const db : DB ={};
db.sequelize= sequelize;
db.Sequelize = Sequelize;

db.user = userFactory(sequelize);
db.role = roleFactory(sequelize);


module.exports = db;

