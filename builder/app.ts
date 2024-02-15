import { HouseBuilder } from './house-builder';

const myHouse = new HouseBuilder(' 64 Patriotichna str')
  .setFloor(3)
  .makeGarden()
  .makeParking()
  .build()

console.log(myHouse);
