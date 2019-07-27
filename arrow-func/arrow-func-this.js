const team = {
  members: ['Jane', 'Bill'],
  teamname: 'Super Team',
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`;
    })
  }
}

team.teamSummary(); // loosing context: this.teamName will be undefined in ES5 functions

// ES6 arrow function uses 'this' from the surrounding context
const team = {
  members: ['Jane', 'Bill'],
  teamname: 'Super Team',
  teamSummary: function() {
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}`; // this equals to the 'team' object
    })
  }
}

// Unexpected behaviour when using arrow functions
const profile = {
  name: 'Alex',
  getName: function() { return this.name },
  getNameArrow: () => { return this.name } // this is not defined here
};

profile.getName(); // 'function' keyword should be used
profile.getNameArrow();

