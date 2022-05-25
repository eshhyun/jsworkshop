function makeCar(color, speed) {
  const car = {
    color,
    speed,
    run() {
      console.log(`Runs at ${this.speed}`);
    },
  };
  return car;
}

const car1 = makeCar('blue', '100km/h');

car1.run();

class Car {
  constructor (color,speed){
    this.color = color ;
    this.speed = speed ;
  } 
  
  run() {
    console.log(`Runs at ${this.speed}`);
  }
}

const car2 = new Car('blue','100km/h');
car2.run();

