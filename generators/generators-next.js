// Generator is a function that can be entered and exited multiple times

function* numbers() {
  yield;
}

const gen = numbers();
gen.next(); // {"done":false}
gen.next(); // {"done":true}
