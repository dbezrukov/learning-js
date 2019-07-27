// Reduce helper condenses down an array into a single value like a Boolean or a number or a string

// Classic example

var numbers = [10, 20, 30];

var sum = numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

/* 
sum - is an accumulator
0 is an initial value
result is 60
*/

// Condensing down an object collection to an array

var colors = [
  { name: 'red' },
  { name: 'yellow' },
  { name: 'blue' }
];

var colorsArray = colors.reduce(function(acc, color) {
  acc.push(color.name);
  return acc;
}, []);

// Balanced parens implementation

function balancedParens(string) {
	return !string.split("").reduce((acc, char) => {
    if (acc < 0) { return acc; }
    if (char === "(") { return ++acc; }
    if (char === ")") { return --acc; }
    
    // Do not forget to return untouched acc otherwise
    return acc;
  }, 0)
}

balancedParens("()(())"); // -> true
balancedParens(")("); // -> false


// Sum of the distance travelled

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(acc, trip) {
    return acc + trip.distance;
}, 0)

// Remove all duplicates

var numbers = [1, 2, 3, 3, 4, 5, 5];

function unique(array) {
  return array.reduce(function(acc, insertingNumber) {
    var containsAlready = acc.find(function(number) {
      return number === insertingNumber
    });
    
    if (!containsAlready) {
    	acc.push(insertingNumber);
    }
    
    return acc;
  }, [])
}

unique(numbers);