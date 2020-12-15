import { Model, DataTypes, Sequelize } from "sequelize";


export interface RoleModel{
    id: number;
    name: string;
}

interface RoleInstance extends Model<RoleModel,RoleModel> {}

export const roleFactory =  (sequelize:Sequelize)=>{
    return sequelize.define<RoleInstance>("roles",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },{
        timestamps:false,
    })

}