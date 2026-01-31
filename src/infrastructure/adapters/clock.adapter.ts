import type { IClock } from "../../application/ports/index.js";

/**
 * Real clock adapter. Implements IClock using system time.
 */
export class ClockAdapter implements IClock {
  now(): Date {
    return new Date();
  }
}
