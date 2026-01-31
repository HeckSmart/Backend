/**
 * Database configuration from environment.
 * Load dotenv before importing this (e.g. in index.ts).
 */
function getEnv(key: string, defaultValue: string): string {
  const value = process.env[key];
  if (value !== undefined && value !== "") return value;
  return defaultValue;
}

export interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  poolMax: number;
  poolMin: number;
  connectTimeoutMs: number;
}

export function getDatabaseConfig(): DatabaseConfig {
  return {
    host: getEnv("DB_HOST", "localhost"),
    port: Number(getEnv("DB_PORT", "3306")),
    username: getEnv("DB_USER", "root"),
    password: getEnv("DB_PASSWORD", ""),
    database: getEnv("DB_NAME", "letskillit"),
    poolMax: Number(getEnv("DB_POOL_MAX", "5")),
    poolMin: Number(getEnv("DB_POOL_MIN", "0")),
    connectTimeoutMs: Number(getEnv("DB_CONNECT_TIMEOUT", "10000")),
  };
}
