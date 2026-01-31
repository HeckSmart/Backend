/**
 * Composition root: wires adapters and use cases.
 * Only this file and infrastructure depend on concrete implementations.
 */
import { createApp } from "./infrastructure/http/app.js";
import { ClockAdapter } from "./infrastructure/adapters/clock.adapter.js";
import {
  createSequelize,
  SequelizeDatabaseAdapter,
} from "./infrastructure/database/index.js";
import { DriverRepository } from "./infrastructure/database/repositories/driver.repository.js";
import { registerModels } from "./infrastructure/database/models/index.js";
import { getDatabaseConfig } from "./config/database.config.js";
import { GetDriverPhoneUseCase } from "./application/use-cases/driver/index.js";
import { CheckHealthUseCase } from "./application/use-cases/health/index.js";
import type { IDatabase } from "./application/ports/index.js";

const clock = new ClockAdapter();
const dbConfig = getDatabaseConfig();
const sequelize = createSequelize(dbConfig);
registerModels(sequelize);
const database: IDatabase = new SequelizeDatabaseAdapter(sequelize);
const checkHealth = new CheckHealthUseCase(clock, database);

const driverRepository = new DriverRepository(sequelize);
const getDriverPhone = new GetDriverPhoneUseCase(driverRepository);

export const app = createApp({
  checkHealth,
  getDriverPhone,
});

export { sequelize, database };
