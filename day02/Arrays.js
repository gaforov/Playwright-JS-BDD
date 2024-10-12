let elements = ["JavaScript", 1, 2.9, "Angular", true, null, undefined];
console.log(elements);

let names = ["John", "Alice", "Bob"];
console.log(names);
console.log(names[2]); // "Bob"

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log("--------------------------------");
for (let name of names) {
  console.log(name);
}
console.log("---------------------------------");
for(let each of names) {
  console.log(each);
}