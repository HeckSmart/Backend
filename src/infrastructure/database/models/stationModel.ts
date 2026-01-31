import { Model, DataTypes } from "sequelize";

class StationModel extends Model {
  declare id: number;
  declare name: string;
  declare latitude: number;
  declare longitude: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date | null;
}

export const stationModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
};

export const stationModelOptions = {
  tableName: "stations",
  timestamps: true,
  paranoid: true,
};

export default StationModel;
