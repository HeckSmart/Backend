import type { Sequelize } from "sequelize";

/**
 * Register all Sequelize models and associations.
 * Call this once after creating the Sequelize instance (e.g. in composition root).
 *
 * Example:
 *   import { User } from "./user.model.js";
 *   export function registerModels(sequelize: Sequelize): void {
 *     User.init(..., { sequelize });
 *     sequelize.models.User = User;
 *     // User.associate?.(sequelize.models);
 *   }
 */
export function registerModels(_sequelize: Sequelize): void {
  // Add model init and associations here as you add entities
}
