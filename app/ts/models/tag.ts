import { Model, DataTypes, Sequelize } from "sequelize";




export interface TagModel {
    id: number;
    name: string;
}

interface TagInstance extends Model<TagModel> { }

export const tagFactory = (sequelize: Sequelize) => {
    return sequelize.define("tags", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}
