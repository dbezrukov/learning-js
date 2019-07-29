// We need to iterate though engineeringTeam and also the testingTeam,
// which is a part of the engineeringTeam in one go

const testingTeam = {
  lead: 'Amanda',  // +
  tester: 'Bill'   // + 
}
const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',    // +
  manager: 'Alex', // +
  engineer: 'Dave' // +
}

// We need to iterate through the people of the team
function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator; // generator delegation
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

names; // ["Jill","Alex","Dave","Amanda","Bill"]
