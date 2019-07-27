// Mixing destructuring

const companies = [
  { name: 'Google', location: 'Montain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];

const [{ location }] = companies;
// location is 'Montain View'

const Google = {
  locations: ['Montain View', 'New York', 'London']
};

const { locations: [ location ] } = Google;
// location is 'Montain View'