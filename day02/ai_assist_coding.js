// create an array of strings and add 10 employee names to it

const employees = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Henry', 'Ian', 'Jack'];

// iterate through the array using a for loop
console.log("For Loop:");

for (let i = 0; i < employees.length; i++) {
  console.log(employees[i]);
}

// iterate through the array using a for...of loop
console.log("\nfor...of loop:");

for (let employee of employees) {
  console.log(employee);
}

// iterate through the array using a for...in loop
console.log("\nfor...in loop:");

for (let i in employees) {
  console.log(employees[i]);
}

// set first employee name to "Said" and last employee name to "Lucy"

employees[0] = 'Said';
employees[employees.length - 1] = 'Lucy';

// print updated array

console.log("\nUpdated Array:");

for (let employee of employees) {
  console.log(employee);
}

// reverse the array using the reverse() method

employees.reverse();
console.log("\nReversed Array:");

for (let employee of employees) {
  console.log(employee);
}


console.log("Another reversed Array:");
for(let i = employees.length-1; i >= 0; i--) {
  console.log(employees[i]);
}