import { Sequelize } from "sequelize";
import type { IDatabase } from "../../application/ports/index.js";
import type { DatabaseConfig } from "../../config/database.config.js";

/**
 * Creates a Sequelize instance for MariaDB.
 */
export function createSequelize(config: DatabaseConfig): Sequelize {
  return new Sequelize({
    dialect: "mariadb",
    host: config.host,
    port: config.port,
    username: config.username,
    password: config.password,
    database: config.database,
    dialectOptions: {
      connectTimeout: config.connectTimeoutMs,
    },
    pool: {
      max: config.poolMax,
      min: config.poolMin,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      timestamps: true,
      underscored: true,
    },
    logging: process.env.NODE_ENV === "development" ? console.log : false,
  });
}

/**
 * Adapter that implements IDatabase using Sequelize.
 * Use for health checks and graceful shutdown; repositories can use the same Sequelize instance.
 */
export class SequelizeDatabaseAdapter implements IDatabase {
  constructor(private readonly sequelize: Sequelize) {}

  async ping(): Promise<boolean> {
    try {
      await this.sequelize.authenticate();
      return true;
    } catch (err) {
      console.error("Database connection failed:", err);
      return false;
    }
  }

  async close(): Promise<void> {
    await this.sequelize.close();
  }
}
