import { Model, DataTypes } from "sequelize";

class DriverModel extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare isActive: boolean;
  declare isOnLeave: boolean;
  declare employeeId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date | null;
}

export const driverModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  swapCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  penaltyWallet: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
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

export const driverModelOptions = {
  tableName: "drivers",
  timestamps: true,
  paranoid: true,
};

export default DriverModel;