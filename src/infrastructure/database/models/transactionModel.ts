import { DataTypes, Model } from "sequelize";

class TransactionModel extends Model {
    declare id: number;
    declare driverId: number;
    declare swapPrice: number;
    declare stationId: string;
    declare createdAt: Date;
    declare updatedAt: Date;
    declare deletedAt: Date;
}


export const transactionModelAttributes = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    driverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    swapPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    stationId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    deletedAt: {    
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
};
export default TransactionModel;