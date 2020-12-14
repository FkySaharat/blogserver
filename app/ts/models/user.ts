import { Model, Optional, DataTypes, Sequelize, BuildOptions } from "sequelize";



export interface UserModel {
    id?: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
}

interface UserInstance extends Model<UserModel, UserModel> { }

export const userFactory = (sequelize: Sequelize) => {

    return sequelize.define<UserInstance>("users", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:''
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:''
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        }
    })


}
