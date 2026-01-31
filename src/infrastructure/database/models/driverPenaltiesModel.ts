import { DataTypes, Model } from "sequelize";

class DriverPenaltiesModel extends Model {
    declare id: number;
    declare driverId: number;
    declare penaltyAmount: number;
    declare penaltyReason: string;
    declare createdAt: Date;
    declare updatedAt: Date;
    declare deletedAt: Date;
}

export const driverPenaltiesModelAttributes = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    driverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    penaltyAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    penaltyReason: {
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

export const driverPenaltiesModelOptions = {
    tableName: "driverPenalties",
    timestamps: true,
    paranoid: true,
};

export default DriverPenaltiesModel;