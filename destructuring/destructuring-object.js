// Pulling of properties from the object

const expense = {
  type: 'Business',
  amount: '$45 USD'
}

const { type, amount } = expense;

// Destructing argument object

const savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
}

function fileSummary({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}`;
}

fileSummary(savedFile); // Order of the arguments doesn't matter