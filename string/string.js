const uppercase = (str) => {
  return str.toUppercase();
};

// lowercase function to lowercase text

const lowercase = (str) => str.toLowerCase();

module.exports = {
  uppercase,
  lowercase,
};

const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

module.exports = { add, mul, sub, div };
