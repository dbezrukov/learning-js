// ES6 provides a shorthand syntax for initializing properties from variables
// ES6 provides a shorthand syntax for defining function methods
// ES6 enables the ability to have computed property names in an object literal definition

const color = 'red';

const Car = {
  color, // in case key and value are identical, they can be condensed down to a single word
  drive() { // defining function method
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};

// Defining function methods for a library
const MathLibrary = {
	calculateProduct(a, b) {
  	return a * b;
  }
}