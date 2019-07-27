// Rest operator - gathering variables to an array

function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0)
}

addNumbers(1, 2, 3, 4, 5); // 15

// Spread operator - spreading the variables out

const defaultColors = ['red', 'green'];
const userColors = ['orange', 'yellow'];

const colors = ['blue', ...defaultColors, ...userColors]; // this one is more effective than concat 

// ["blue","red","green","orange","yellow"]

// Dealing with deprecated methods

const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
}

// Rewriting unshift function using rest/spread operators

// ES5
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

// ES6 
function unshift(array, ...others) {
  return [...others, ...array];
}