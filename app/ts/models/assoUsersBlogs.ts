import { Sequelize, DataTypes } from "sequelize";
import { userFactory } from "./user";
import { blogFactory } from "./blog";
import { roleFactory } from "./role";


export const assoUsersBlogFactory = (sequelize: Sequelize)=>{
    return sequelize.define('asso_users_blogs',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull:false
        },
        userId:{
            type: DataTypes.UUID,
            references:{
                model: userFactory(sequelize),
                key: 'id'
            }
        },
        blogId:{
            type: DataTypes.UUID,
            references:{
                model: blogFactory(sequelize),
                key:'id'
            }
        },
        roleId:{
            type: DataTypes.INTEGER,
            references:{
                model: roleFactory(sequelize),
                key:'id'
            }
        }
    })
}