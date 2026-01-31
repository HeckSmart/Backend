/**
 * Port for driver persistence. Application depends on this; infrastructure implements it.
 */

/** Basic details from users table (excludes password). */
export interface UserBasicDetails {
  id: number;
  name: string;
  email: string | null;
  mobile: string;
  employeeId: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

/** Personalized details from drivers table. */
export interface DriverPersonalizedDetails {
  id: number;
  employeeId: string;
  isActive: boolean;
  isOnLeave: boolean;
  status?: string | null;
  swapCount?: number;
  penaltyWallet?: number;
  createdAt?: Date;
  updatedAt?: Date;
  [key: string]: unknown;
}

/** Combined result: basic (user) + personalized (driver). */
export interface DriverDetailsResult {
  user: UserBasicDetails;
  driver: DriverPersonalizedDetails;
}

export interface IDriverRepository {
  getPhoneById(driverId: string): Promise<string | null>;
  getDriverDetailsById(driverId: string): Promise<DriverDetailsResult | null>;
}
