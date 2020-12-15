import { Model, DataTypes, Sequelize } from "sequelize";



export interface BlogModel {
    id?: string;
    header: string;
    body: string;
    publicAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

interface BlogInstance extends Model<BlogModel, BlogModel> { }

export const blogFactory = (sequelize: Sequelize) => {
   return sequelize.define<BlogInstance>("blogs",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey:true
            },
            header: {
                type: DataTypes.STRING,
                allowNull:false,
                defaultValue:''
            },
            body: {
                type: DataTypes.STRING,
                allowNull:false,
                defaultValue:''
            },
            publicAt: {
                type: DataTypes.DATE,
                allowNull:true
            },
        }, {
            timestamps: true,
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        })
}




