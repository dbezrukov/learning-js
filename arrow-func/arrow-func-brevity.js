const double = (number) => {
    return 2 * number;
}

// braces can be omitted for a single expression
const double = (number) => 2 * number;

// parenthesis can be omitted for a single agrument
const double = number => 2 * number;

const numbers = [1, 2, 3];

numbers.map(number => 2 * number);
