/**
 * Port for driver persistence. Application depends on this; infrastructure implements it.
 */
export interface IDriverRepository {
  getPhoneById(driverId: string): Promise<string | null>;
}
