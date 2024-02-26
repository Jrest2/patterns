interface ICar {
  type: string;
  brand: string;
  model: string;
  year: string;
  
  getCarInfo (): void
}


class Tesla implements ICar {
  type = 'Electric';
  model = 'Model X';
  brand = 'Tesla';
  year = '2020';
  
  getCarInfo() {
    console.log(`
      type: ${this.type}
      model: ${this.model}
      brand: ${this.brand}
      year: ${this.year}
    `)
  }
}

class Dodge implements ICar {
  type = 'Fuel';
  brand = 'Dodge';
  model = 'Challenger';
  year = '2015';

  getCarInfo() {
    console.log(`
      type: ${this.type}
      model: ${this.model}
      brand: ${this.brand}
      year: ${this.year}
    `)
  }
}

class BMW implements ICar {
  type = 'Electric';
  brand = 'BMW';
  model = 'i8';
  year = '2017';

  getCarInfo() {
    console.log(`
      type: ${this.type}
      model: ${this.model}
      brand: ${this.brand}
      year: ${this.year}
    `)
  }
}

enum CarTypes {
  tesla = 'tesla',
  dodge = 'dodge',
  bmw = 'bmw',
}


class CarFactory {
  createCar(type: CarTypes): ICar {
    switch (type) {
      case CarTypes.bmw:
        return new BMW()
      case CarTypes.tesla:
        return new Tesla()
      case CarTypes.dodge: 
        return new Dodge()
    }
  }
}




const carFactory = new CarFactory();

const teslaCar = carFactory.createCar(CarTypes.tesla);
teslaCar.getCarInfo();


const bmwCar = carFactory.createCar(CarTypes.bmw);
bmwCar.getCarInfo()

const dodgeCar = carFactory.createCar(CarTypes.dodge);
dodgeCar.getCarInfo()
