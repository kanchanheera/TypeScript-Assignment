let myName = "Kanchan heera";

// Print in lowercase

console.log(`lowercase: ${myName.toLowerCase()}`);

// Print in Uppercase

console.log(`Uppercase: ${myName.toUpperCase()}`);

//Print in Title Case

console.log(`Titlecase: ${myName.replace(/\b\w/g,c=> c.toUpperCase())}`);