/* 
Attributes: name (string), id (number), salary (number),
Methods: calculateBonus(percentage) (returns bonus amount),
*/

class Employee {
  constructor(name = "new_employee", id, salary=70_000) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working.`);
  }

}

let employee1 = new Employee("John Doe", 1, 50000);
employee1.salary = 100_000;  // overwriting salary (not override, completely replacing the previous value)
employee1.work(); // Output: John Doe is working.
console.log(employee1.salary);

//employee2 = new Employee("Jane Smith", 2, 60000);
employee2 = new Employee();
console.log(employee2); // undefined or retrived from the constructor with default values