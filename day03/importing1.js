// This type of import is not recommended. This will import everything. 

// 1. Import everything, including Hello World prints, etc. 
/* const allUtility = require('./Utility.js');

let result = allUtility.square(5);
console.log(result); // Output: 25

result = allUtility.cube(5);
console.log(result); // Output: 125

result = allUtility.calculate(5, 3, '+');
console.log(result); // Output: 8 */

// 2. import a specific function from a module

const {calculate} = require('./Utility.js');

let result = calculate(10, 20, '+');
console.log(result); // Output: 30
