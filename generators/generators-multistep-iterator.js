// Generators can be used as multistep iterators
// Iterator is a tool that teaches objects how to respond to the for of loop

const team = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',     // +
  manager: 'Alex',  // +
  engineer: 'Dave'  // +
}

// We need to iterate through the people of the team

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

for (let name of TeamIterator(team)) {
  console.log(name);
}
