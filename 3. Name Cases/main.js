var myName = "Kanchan heera";
// Print in lowercase
console.log("lowercase: ".concat(myName.toLowerCase()));
// Print in Uppercase
console.log("Uppercase: ".concat(myName.toUpperCase()));
//Print in Title Case
console.log("Titlecase: ".concat(myName.replace(/\b\w/g, function (c) { return c.toUpperCase(); })));
