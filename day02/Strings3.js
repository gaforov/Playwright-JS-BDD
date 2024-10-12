// Extract domain from email addess

let email = "joh.doe@gmail.com";

//using split
let domain = email.split("@")[1]; // split by @ and return the 2nd array which is domain
console.log(domain);

// using substring
domain = email.substring(email.indexOf("@") + 1); // 1 starting position of string, @=0, which means start after @
console.log(domain);

// using RegEx
let match = email.match(/@(.+)$/);
domain = match ? match[1] : null;  // Returns null if there's no match
console.log(domain);

// exclude .com, .edu. etc from domain
domain = email.substring(email.indexOf("@") + 1, email.lastIndexOf("."));
console.log(domain);
