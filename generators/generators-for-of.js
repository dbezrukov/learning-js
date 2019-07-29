const colors = ['red', 'green', 'blue'];

// 'for of' is useful for iteration
for (let color of colors) {
  console.log(color);
}

// 'for of' can nbe used with generators

function* colors() {
  yield 'red';
  yield 'green';
  yield 'blue';
}

for (let color of colors) {
  console.log(color);
}

// Generators don't work from array helpers like map and reduce
// But they work from 'for .. of'