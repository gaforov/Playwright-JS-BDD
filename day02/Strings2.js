let originalString = "Hello World! Welcome to the world of JavaScript.";
let newString = originalString.replace(/world/gi, "universe");  // g=global, i=case insensitive
console.log(newString);

// replace all digits with space
let str = "abcdefgh12345oiut678kjhtr34lk90klmn"
newStr = str.replace(/\d/g, " ");
console.log(newStr);
newStr = str.replace(/\d/g, ""); // without space, just remove digits
console.log(newStr, "\n--------");

let fruits =  "There are 42 apples and 15 oranges.";
console.log(fruits);

/* Why we are using 'g' global for replace ALL ? Reason: 
 When replaceAll() is used with a string as the first argument, it automatically replaces all occurrences.
 However, when used with a regular expression, it requires the 'g' flag to be set. */
newFruits = fruits.replaceAll(/\d/g, " ");
console.log(newFruits);
