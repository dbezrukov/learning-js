// We have some data from an API 

const points = [
  [4, 5],
  [10, 1],
  [0, 40]
]

// And we need to convert it to a data structure like this

[
  { x: 4, y: 5 },
  { x: 10, y: 1 },
  { x: 0, y: 40 }
]

// Transform the data using array destructuring and enhanced object literals

points.map(([ x, y ]) => { // [] is a must
  return { x, y }
});
