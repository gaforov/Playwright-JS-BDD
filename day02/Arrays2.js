/* Some commonly used Array Methods:
- push(element): Adds element to the end of the array
- unshift(element): Adds element to the beginning of array
- shift(): Removes first element from array
- pop(): Removes last element from array 
- splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
- slice(): Returns a shallow copy of a portion of an array
*/

let employees = ["Alice", "Bob", "Charlie", "Said", "Ahmed"];
console.log(employees);
console.log(employees.length);

employees.push("David");  // add to the end of array
console.log(employees);
employees.unshift("Emily");  // add to the beginning of array
console.log(employees);

employees.splice(2, 0, "Eve");  // insert element at index 2
console.log(employees);

employees.splice(3, 1);  // remove element at index 3, "Bob"
console.log(employees);

newEmp = employees.slice(2, 4);  // remove elements from index 2 to 4 (exclusive)
console.log(newEmp);

employees.pop();  // remove last element, "David"
console.log(employees);

employees.shift();  // remove first element, "Emily"
console.log(employees);
