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
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employeeId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  isOnLeave: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
};

export const driverModelOptions = {
  tableName: "drivers",
  timestamps: true,
  paranoid: true,
};

export default DriverModel;