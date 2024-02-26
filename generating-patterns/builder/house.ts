import { HouseBuilder } from './house-builder';

export class House {
  address: string;
  floorNumber: number;
  isHavingParking: boolean;
  isHavingGarden: boolean;
  
  constructor(houseBuilder: HouseBuilder) {
    this.address = houseBuilder.getAddress();
    this.floorNumber = houseBuilder.getFloorNumber();
    this.isHavingGarden = houseBuilder.isHavingGarden()
    this.isHavingParking = houseBuilder.isHavingParking()
  }
}
