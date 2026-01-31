/**
 * Outbound port: clock / date provider.
 * Infrastructure implements this (e.g. real clock, fixed for tests).
 */
export interface IClock {
  now(): Date;
}
