import { Model, DataTypes, Sequelize } from "sequelize";



interface RoleInstance extends Model {
    id: number;
    name: string;
}

export const roleFactory =  (sequelize:Sequelize)=>{
    return sequelize.define("role",{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

}