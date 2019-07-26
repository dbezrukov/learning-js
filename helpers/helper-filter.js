// We should avoid mutating original data so it is a good practice to return a new array

var products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' },
]

// Filtering fruits, filter helper returns an Array with all 'fruit' occurrences
products.filter(function(product) {
  return product.type === 'fruit'
})

// Implementing reject helper
var numbers = [10, 20, 30];

function reject(array, iteratorFunction) {
  return array.filter(function(element) {
    return !iteratorFunction(element);
  });
}

var lessThanFifteen = reject(numbers, function(number) {
  return number > 15;
})
