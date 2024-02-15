enum Car {
  HONDA,
  MAZDA,
}


abstract class CarPart {
  static getFactory(car: Car) {
    switch (car) {
      case Car.HONDA:
        return new HondaFactory();
      case Car.MAZDA:
        return new MazdaFactory();
      default:
        throw new Error('Invalid car type');
    }
  }
  
  
  abstract getLeftDoor(): HondaLeftDoor | MazdaLeftDoor;
  abstract getRightDoor(): HondaRightDoor | MazdaRightDoor;
}


class HondaFactory extends CarPart {
  getLeftDoor(): HondaLeftDoor {
    return new HondaLeftDoor();
  }
  
  getRightDoor(): HondaRightDoor {
    return new HondaRightDoor();
  }
}


class MazdaFactory extends CarPart {
  getLeftDoor(): MazdaLeftDoor {
    return new MazdaLeftDoor();
  }

  getRightDoor(): MazdaRightDoor {
    return new MazdaRightDoor();
  }
}

class HondaLeftDoor {
  makePart() {
    return 'Honda left door is ready!';
  }
}

class HondaRightDoor {
  makePart() {
    return 'Honda right door is ready!';
  }
}

class MazdaLeftDoor {
  makePart() {
    return 'Mazda left door is ready!';
  }
}

class MazdaRightDoor {
  makePart() {
    return 'Mazda right door is ready!';
  }
}


const hondaFactory: HondaFactory = CarPart.getFactory(Car.HONDA);
const mazdaFactory: MazdaFactory = CarPart.getFactory(Car.MAZDA);

const hondaLeftDoor: HondaLeftDoor = hondaFactory.getLeftDoor();
const hondaRightDoor: HondaRightDoor = hondaFactory.getRightDoor();

const mazdaLeftDoor: MazdaLeftDoor = mazdaFactory.getLeftDoor();
const mazdaRightDoor: MazdaRightDoor = mazdaFactory.getRightDoor();



console.log(hondaLeftDoor.makePart());
console.log(hondaRightDoor.makePart());

console.log(mazdaLeftDoor.makePart());
console.log(mazdaRightDoor.makePart());





