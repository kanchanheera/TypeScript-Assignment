//Assignment Solutions
//Question no 11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by
//accessing each element in the list, one at a time.

//let names: string [] = ["Kanchana", "Sanjana", "Fazila", "Amrita"]
//console.log(names[0]);
//console.log(names[1]);
//console.log(names[2]);
//console.log(names[3]);

//Question no 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s
//name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// let names: string [] = ["Kanchana", "Sanjana", "Fazila", "Amrita"]
// let message: string = "Do you like to play Cricket?"
// console.log(names[0] + " " + message)
// console.log(names[1] + " " + message)
// console.log(names[2] + " " + message)
// console.log(names[3] + " " + message)

//Question no 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//and make a list that stores several examples. Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”

//let transportation: string [] = ["Honda motorcycle", "Audi", "Honda City"];
//transportation.map((items) => console.log(`I would like to own a ${items}`));

//Question no 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a
//message to each person, inviting them to dinner.

//let guestArr: string [] = ["Rani", "Sana", "Kiran"];
//guestArr.map((items)=> console.log(`Dear ${items}, You are invited to the dinner.`));

//Question no 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need
//to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name
//of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

let guestArr: string[] = ["Rani", "Sana", "Kiran"];
let canNotAttend: string = "Kiran"
//console.log(canNotAttend, "can not attend the dinner.");

let newGuest: string = "Amrita"
guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr);

guestArr.map((items) => console.log(`Dear ${items}, You are invited to the dinner.`))

// Question no 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of 
// three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing peoplethat you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.







