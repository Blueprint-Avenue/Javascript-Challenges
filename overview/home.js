console.log("hello");
// alert("yo");

// variables
var b = "smoothie";
console.log(b);

let someNumber = 45;
console.log(someNumber);

// document.getElementById("someText").innerHTML = "Hello Mac";

// let age = prompt("What is your age?");

// document.getElementById("someText").innerHTML = age;

// numbers in javascript
let num1 = 10;

// increment num1 by 1
num1++;

// decrement num1 by 1
num1--;
console.log(num1);
// divide, mulitply *, remainder %
console.log(num1 % 6);

// increment/decrement by any number

num1 += 11;
console.log(num1);

// functions
/*
1. create a function
2.call the function
*/

// create
function fun() {
	console.log("this is itttttt");
}
// call
fun();

/*
Create a function that takes in a name and says hello followed by your name

for example
Name:" Samiya"
Return: "Hello Samiya"
*/

function greeting(yourName) {
	let result = "Hello " + yourName;
	console.log(result);
}
// let name = prompt("What is your name?");
// greeting(name);

// How do arguments work in functions?
//  How do we add 2 numbers together in a function?

function sumNumbers(num1, num2) {
	let result = num1 + num2;
	console.log(result);
}

sumNumbers(7, 7);

// While loops
let num = 0;

while (num < 100) {
	num += 1;
	// console.log(num);
}

// For Loop
for (let num = 0; num < 100; num++) {
	// console.log(num);
}

//  Data Types in JS
let yourAge = 19; //number
let yourName = "POP"; //string
let name = { first: "Moni", last: "lop" }; //object
let truth = false; //boolean
let groceries = ["apple", "banana", "oranges"]; //array
let random; //undefined
let nothing = null; //value null

// Strings in Javascript
let fruit = "apple";
let moreFruits = "apple\nbanana"; // \n writes a new line
console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf("app")); //starts finding
console.log(fruit.slice(2, 3)); //slices it from(including) to up.
console.log(fruit.replace("app", "pop")); //replace the name
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2)); //get the character
console.log(fruit[2]); //this and charAt is the same
console.log(fruit.split(","));
/*split a string with a character '' = 'a','p'..
',' split by a comma would add quotes around it.
*/

// Javascript in Arrays (ways to create an array)
let fruits = ["pineapple", "apple", "watermelon", "orange"];
let exoticFruits = new Array("pineapple", "apple", "watermelon", "orange");
console.log(exoticFruits[2]); //access value at index 2nd
fruits[0] = "mango";
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]); //printed out the items one at a time from loop
}

// array common methods
console.log("to string", fruits.toString());
console.log(fruits.join(" - ")); //joins with a hyphen
console.log(fruits.pop(), fruits); //deletes off last element
console.log(fruits.push("pineapple"), fruits); //add an element - appends
console.log(fruits[4]);
fruits[4] = "new fruit"; // fruit[fruits.length] both are the same as push
console.log(fruits);
fruits.shift(); //remove first element from a array
console.log(fruits);
fruits.unshift("grapes"); // add element to an array
console.log(fruits);

let vegetables = ["broccoli", "corn", "potatoes"];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 355, 321, 2];
console.log(
	someNumbers.sort(function (a, b) {
		return a - b;
	})
); // sorted numbers in assending order b-a would be decending order

let emptyArray = new Array();
for (let num = 0; num < 25; num++) {
	emptyArray.push(num);
}
console.log(emptyArray); //loop through an append

// Objects in Javascript
let student = {
	first: "Samiya",
	last: "McIntosh",
	age: 31,
	height: "5ft",
	studentInfo: function () {
		return this.first + "\n" + this.last + "\n" + this.age;
	},
};
console.log(student.first);
console.log(student.last);
console.log(student);
student.first = "Mac"; //change value
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

// Conditionals, Control flows (if else)
// 18-35 demographic
// && AND
// || OR
let age = 45;
if (age >= 18 && age <= 35) {
	status = "target demo";
	console.log(status);
} else {
	status = "not my audience";
	console.log(status);
}

// Switch statements
// differentiate between weekday vs weekend
// day 0 Sunday
// 6 day - Saturday
// day 4 - Thursday - weekday

switch (2) {
	case 0:
		text = "Weekend";
		break;
	case 5:
		text = "Weekend";
		break;
	case 6:
		text = "Weekend";
		break;
	default:
		text = "Weekday";
}
console.log(text);
