import { Model, DataTypes } from "sequelize/types";
import {sequelize} from '../database/connection';

export class BlogModel extends Model{
    id!:string;
    header!:string;
    body!:string;
    publicAt!: Date;
    createdAt!: Date;
    updatedAt!: Date;
}

export  const Blog = BlogModel.init(
    {   //colunm config
        id:{
            type: DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true
        },
        header:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:''
        },
        body:{
            type:DataTypes.STRING,
            defaultValue:''
        },
        publicAt:{
            type: DataTypes.DATE,
            allowNull: true
        }
    },{
        //table config
        sequelize,
        tableName:'blog',
        freezeTableName: true,
        timestamps:true,
        createdAt:'createdAt',
        updatedAt: 'updatedAt'
    }
)