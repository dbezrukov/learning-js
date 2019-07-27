// Changing global var from a block scope
var topic = 'JavaScript';

if (topic) {
  var topic = 'React';
  console.log('block', topic); // block React
}

console.log('global', topic); // global React -> the global value was reassigned in the block!

// 'for' loop doesn't isolate var 
for (var i = 0; i < 5; i++) {
  setTimeout(function() { alert(i); }, 1000); // 5 5 5 5 5
}

// let isolates variable in {} and for {}
for (let i = 0; i < 5; i++) {
  setTimeout(function() { alert(i); }, 1000); // 1 2 3 4 5
}

// Don't use var anymore, use const or let

// Variable should be declared using 'let' or 'const' depending whether the variable gets reassigned or not
const name = 'Jane';
let hourlyWage = 40; // can be changed in future
