import { Model, Optional, DataTypes, Sequelize, BuildOptions } from "sequelize";



interface UserInstance extends Model {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
}

export const userFactory = (sequelize: Sequelize) =>{

    return sequelize.define<UserInstance>("user", {
        id: {
            type: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
    
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    
}

