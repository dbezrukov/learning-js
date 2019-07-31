// ES2018 feature: merging object properties with rest operator

const person = { name: 'Alex', age: 20 };
const account = { user: 'alex', amount: '$100' };

// gathering properties into a simgle object
const personAndAccount = { ...person, ...account };
personAndAccount; 

// { name: 'Alex', age: 20, user: 'alex', amount: '$100' }
