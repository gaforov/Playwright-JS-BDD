function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

console.log("Hello World!");

function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        throw new Error('Cannot divide by zero');
      }
      return num1 / num2;
    case '**':
      return Math.pow(num1, num2);
    case '%':
      return num1 % num2;
    case 'cube':
      return cube(num1);
    case'square':
      return square(num1);
    default:
      throw new Error('Invalid operator');
  }
}

console.log("Another Hello World");

module.exports = {square, cube, calculate};