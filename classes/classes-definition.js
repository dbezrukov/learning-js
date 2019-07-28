// Enhanced object literals used for class initialization
// By default ES6 has no class properties
// No commas needed when defining a class

class Car {
  constructor({ title }) {
    this.title;
  }
  drive() {
    return 'vroom';
  }
}

const car = new Car({ title: 'Toyota' });
car.drive();