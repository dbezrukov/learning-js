const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () { // Using Symbol.Iterator
      yield this.lead;
      yield this.tester;
    }
  }
  
  const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
  }
  
  function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    yield* team.testingTeam; // generator delegation
  }
  
  const names = [];
  for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
  }

  // Refactored one 

  const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () {
      yield this.lead;
      yield this.tester;
    }
  }
  
  const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
      yield this.lead;
      yield this.manager;
      yield this.engineer;
      yield* this.testingTeam;
    }
  }
  
  const names = [];
  for (let name of engineeringTeam) {
    names.push(name);
  }
