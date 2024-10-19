class Person {
  constructor(name = "Unknown", age = 0, gender = "Unknown") {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Student extends Person {
  constructor(name, age, grade = "High School") {
    super(name, age);
    this.grade = grade;
  }
  study() {
    console.log(`${this.name} is studying.`);
  }
}

class Teacher extends Person {
  constructor(name, age, salary = 60_000){
    super(name, age);
    this.salary = salary;
  }
  teach() {
    console.log(`${this.name} is teaching.`);
  }
}

let student1 = new Student("John Wick", 25);
student1.eat();
student1.study();

let teacher1 = new Teacher("Mary Poppins", 45);
teacher1.teach();

console.log(student1); // Output: Student { name: 'John Wick', age: 25, grade: 75 }
console.log(teacher1); // Output: Teacher { name: 'Mary Poppins', age: 45, salary: 50000 }