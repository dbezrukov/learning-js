// Enhanced object literals used for class initialization
// By default ES6 has no class properties

class Car {
  constructor({ title }) {
    this.title;
  }
  drive() {
    return 'vroom';
  }
}


class Totota extends Car {
  constructor(options) { // it's better not to use destructuring in inherited classes 
    super(options);
    this.color = options.color;
  }
  honk() {
    return 'beep';
  }
}


const toyota = new Toyota({ color: 'red', title: 'My car' });
toyota.honk();
toyota.drive();

// Another example

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(snake) {
    snake.health-=10;
  }
}

const snake1 = new Snake({ name: 'Snake1' });
const snake2 = new Snake({ name: 'Snake2' });

snake2.bite(snake1);

snake1.health; // 90