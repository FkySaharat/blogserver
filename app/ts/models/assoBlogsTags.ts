import { Sequelize, DataTypes } from "sequelize";
import { blogFactory } from "./blog";
import { tagFactory } from "./tag";


export const assoBlogsTagsFactory = (sequelize:Sequelize)=>{
    return sequelize.define('asso_blogs_tags',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true,
            allowNull:true
        },
        blogsId:{
            type: DataTypes.UUID,
            references:{
                model: blogFactory(sequelize),
                key:'id'
            }
        },
        tagId:{
            type: DataTypes.INTEGER,
            references:{
                model: tagFactory(sequelize),
                key:'id'
            }
        }
    })
}