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

const team = {
  members: ['Jane', 'Bill'],
  teamname: 'Super Team',
  teamSummary: function() {
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}`; // this equals to 'team'
    })
  }
}

// ES6 arrow function uses 'this' from the surrounding context