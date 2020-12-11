import { Model, DataTypes } from "sequelize/types";
import {sequelize} from "../database/connection";
 

class TagModel extends Model{
    id!: number;
    name !: string;
}

TagModel.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        sequelize,
        tableName: 'tag',
        freezeTableName: true
    }
)