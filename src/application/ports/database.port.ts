/**
 * Outbound port: database connectivity check.
 * Infrastructure implements this (e.g. Sequelize adapter).
 */
export interface IDatabase {
  ping(): Promise<boolean>;
  close(): Promise<void>;
}
