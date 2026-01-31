import type {
  DriverDetailsResult,
  IDriverRepository,
} from "../../ports/driver-repository.port.js";

export class GetDriverPhoneUseCase {
  constructor(private readonly driverRepository: IDriverRepository) {}

  async execute(driverId: string): Promise<string | null> {
    return this.driverRepository.getPhoneById(driverId);
  }
}

export class GetDriverDetailsUseCase {
  constructor(private readonly driverRepository: IDriverRepository) {}

  async execute(driverId: string): Promise<DriverDetailsResult | null> {
    return this.driverRepository.getDriverDetailsById(driverId);
  }
}