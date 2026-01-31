import type { IClock } from "../../ports/index.js";
import type { IDatabase } from "../../ports/database.port.js";

export interface HealthResult {
  status: "ok";
  timestamp: string;
  uptimeSeconds: number;
  database?: "connected" | "disconnected";
}

export class CheckHealthUseCase {
  constructor(
    private readonly clock: IClock,
    private readonly database?: IDatabase
  ) {}

  async execute(): Promise<HealthResult> {
    const now = this.clock.now();
    const result: HealthResult = {
      status: "ok",
      timestamp: now.toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
    };
    if (this.database) {
      result.database = (await this.database.ping()) ? "connected" : "disconnected";
    }
    return result;
  }
}
