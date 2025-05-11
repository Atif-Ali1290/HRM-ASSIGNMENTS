//chap 5

//Q1.Write a program that take two numbers & add them in a
//new variable. Show the result in your browser.
 
 // ANS 1. Add two numbers
 let a = 5;
 let b = 3;
 let add = a + b;
 document.write(`1. ${a} + ${b} = ${add}<br>`);


 // Q2 Repeat task1 for subtraction, multiplication, division &
//modulus.

// ans 2.

console.log(` ${a} - ${b} = ${a - b}`);
console.log(` ${a} * ${b} = ${a * b}`);
console.log(` ${a} / ${b} = ${a / b}`);
console.log(` ${a} % ${b} = ${a % b}`);


// Q3 Do the following using JS Mathematic Expressions
///a. Declare a variable.
//b. Show the value of variable in your browser like “Value
//after variable declaration is: ??”.
//c. Initialize the variable with some number.
//d. Show the value of variable in your browser 
//e. Increment the variable.
//f. Show the value of variable in your browser like “Value
//after increment is: 6”.
//g. Add 7 to the variable.
//h. Show the value of variable in your browser like “Value
//after addition is: 13”.
//i. Decrement the variable.
//j. Show the value of variable in your browser like “Value
//after decrement is: 12”.
//k. Show the remainder after dividing the variable’s value
//by 3.
//l. Output : “The remainder is : 0”.


// ANs 3
let num;
        document.write(` Value after declaration: ${num}<br>`);
        
        num = 5;
        document.write(` Initial value: ${num}<br>`);
        
        num++;
        document.write(` After increment: ${num}<br>`);
        
        num += 7;
        document.write(` After adding 7: ${num}<br>`);
        
        num--;
        document.write(` After decrement: ${num}<br>`);
        
        document.write(` Remainder when divided by 3: ${num % 3}`);


        
//Q4 Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie.        

// ANS

let ticketPrice = 600; 

let numberOfTickets = 5;
let totalCost = ticketPrice * numberOfTickets;

console.log(`The cost of one movie ticket is: ${ticketPrice} PKR`);
console.log(`The total cost for ${numberOfTickets} tickets is: ${totalCost} PKR`)

//Q5 Write a script to display multiplication table of any
//number in your browser.

//ans 

const number = 5; // Change this number for different tables
document.write(`<h2>Multiplication Table of ${number}</h2>`);
for(let i = 1; i <= 10; i++) {
    document.write(`${number} × ${i} = ${number * i}<br>`);
}

 //Q6 The Temperature Converter: It’s hot out! Let’s make a
//converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.


//ans
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
document.write(`${celsius}°C is ${fahrenheit}°F<br>`);

fahrenheit = 77;
celsius = (fahrenheit - 32) * 5/9;
document.write(`${fahrenheit}°F is ${celsius.toFixed(1)}°C`);

//Q7 Write a program to implement checkout process of a
//shopping cart system for an e-commerce website. Store
//the following in variablesa.
//  Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges

//ans

const price1 = 500, price2 = 300;
const quantity1 = 2, quantity2 = 3;
const shipping = 150;

const total = (price1 * quantity1) + (price2 * quantity2) + shipping;
document.write(`<h2>Shopping Receipt</h2>
    Item 1: ${quantity1} × ${price1} = ${price1 * quantity1}<br>
    Item 2: ${quantity2} × ${price2} = ${price2 * quantity2}<br>
    Shipping: ${shipping}<br>
    <b>Total: ${total}</b>`);

// Q8  Store total marks & marks obtained by a student in 2
//variables. Compute the percentage & show the result in
//your browser

//ans

const totalMarks = 500;
const obtainedMarks = 375;
const percentage = (obtainedMarks / totalMarks) * 100;

document.write(`<h2>Result</h2>
    Total Marks: ${totalMarks}<br>
    Obtained Marks: ${obtainedMarks}<br>
    Percentage: ${percentage.toFixed(2)}%`);

 //Q9 Assume we have 10 US dollars & 25 Saudi Riyals. Write a
//script to convert the total currency to Pakistani Rupees.
//Perform all calculations in a single expression.
//Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
//and 1 Saudi Riyal = 28 Pakistani Rupee)

//ans
const usd = 10, sar = 25;
const pkr = (usd * 104.80) + (sar * 28);

document.write(`<h2>Currency Conversion</h2>
    ${usd} USD + ${sar} SAR = ${pkr} PKR`);

//Q10 Write a program to initialize a variable with some
//number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression

//ans

let num1 = 8;
const result = ((num + 5) * 10) / 2;
document.write(`Starting number: ${num}<br>Result: ${result}`);


// Q11 The Age Calculator: Forgot how old someone is?
//Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored
//values.

// ans

const currentYear = 2023;
const birthYear = 1995;
const age1 = currentYear - birthYear;
const age2 = age1 - 1;

document.write(`They are either ${age1} or ${age2} years old`);

//Q12 The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and
//output “The circumference is NN”.
//(Hint : Circumference of a circle = 2 π r , π = 3.142)
//Calculate the area based on the radius, and output “The
//area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


//ans

const radius = 7;
const circumference = 2 * Math.PI * radius;
const area = Math.PI * radius * radius;

document.write(`<h2>Circle Properties</h2>
    Radius: ${radius}<br>
    Circumference: ${circumference.toFixed(2)}<br>
    Area: ${area.toFixed(2)}`);

   
   
   
 //Q13 The Lifetime Supply Calculator: Ever wonder how
//much a “lifetime supply” of your favorite snack is?
//Wonder no more.
//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of
//your life.


//ans
let favoriteSnack = "chocolate bars"; 
let currentAge = 25;
let maxAge = 80;
let snacksPerDay = 2; 
let yearsRemaining = maxAge - currentAge;
let totalSnacks = snacksPerDay * 365 * yearsRemaining;
console.log("=== LIFETIME SUPPLY CALCULATOR ===");
console.log(`Favorite Snack: ${favoriteSnack}`);
console.log(`Current Age: ${currentAge}`);
console.log(`Maximum Age: ${maxAge}`);
console.log(`Snacks per Day: ${snacksPerDay}`);
console.log(`\nYou will need ${totalSnacks} ${favoriteSnack} to last until age ${maxAge}.`);



//chap 6-9

//Q1 Write a program to take a number in a variable, do the
//required arithmetic to display the following result in your
//browser:

// ans
let num2 = 10;
console.log(`Initial value: ${num}`);
console.log(`After increment: ${++num}`); // 11
console.log(`After addition (7): ${num + 7}`); // 18
console.log(`After decrement: ${--num}`); // 17
console.log(`Final value: ${num}`); // 17

//Q2 What will be the output in variables a, b & result after
//execution of the following script:
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;

// ANS
let a1 = 2, b1 = 1;
let result1 = --a - --b + ++b + b--;

console.log(`a: ${a}, b: ${b}, result: ${result1}`);
// Step-by-step explanation:
// --a: a becomes 1 (pre-decrement)
// --a - --b: b becomes 0 → 1 - 0 = 1
// + ++b: b becomes 1 → 1 + 1 = 2
// + b--: uses current b (1) then decrements → 2 + 1 = 3
// Final: a=1, b=0, result=3


//Q3 Write a program that takes input a name from user &
//greet the user.

//ANS
let userName = prompt("Enter your name:");
if (userName) {
    console.log(`Hello ${userName}! Welcome to our website.`);
} else {
    console.log("Hello Guest! Welcome to our website.");
}


//Q4 Write a program to take input a number from user &
//display it’s multiplication table on your browser. If user
//does not enter a new number, multiplication table of 5
//should be displayed by default.

//ANS

let number4 = parseInt(prompt("Enter a number for multiplication table:")) || 5;
console.log(`Multiplication Table of ${number4}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number4} × ${i} = ${number4 * i}`);
}

//Q5 Take
//a) Take three subjects name from user and store them in 3
//different variables.
//b) Total marks for each subject is 100, store it in another
//variable.
//c) Take obtained marks for first subject from user and
//stored it in different variable.
//d) Take obtained marks for remaining 2 subjects from user
//and store them in variables.
//e) Now calculate total marks and percentage and show the
//result in browser 

//ANS
let subject1 = prompt("Enter first subject name:") || "Math";
let subject2 = prompt("Enter second subject name:") || "Science";
let subject3 = prompt("Enter third subject name:") || "English";

let marks1 = parseInt(prompt(`Enter marks for ${subject1}:`)) || 0;
let marks2 = parseInt(prompt(`Enter marks for ${subject2}:`)) || 0;
let marks3 = parseInt(prompt(`Enter marks for ${subject3}:`)) || 0;

const totalMarks3 = 300;
let obtainedMarks3 = marks1 + marks2 + marks3;
let percentage3 = (obtainedMarks / totalMarks) * 100;


console.log(`
    Subject       Marks
    ------------------
    ${subject1}     ${marks1}/100
    ${subject2}   ${marks2}/100
    ${subject3}  ${marks3}/100
    ------------------
    Total Marks: ${obtainedMarks}/300
    Percentage: ${percentage.toFixed(2)}%
`);


// chap 14-16

// Q1 Declare an empty array using JS literal notation to store
//student names in future.

// ANs
let studentsLiteral = []; // Empty array using literal notation
console.log(studentsLiteral); 

//Q2 Declare an empty array using JS object notation to store
//student names in future.

// ans
let studentsObject = new Array(); 
console.log(studentsObject); 
 
//Q3 Declare and initialize a strings array.
//ans
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits); // ["Apple", "Banana", "Orange"]

//Q4 Declare and initialize a numbers array.

//ans
let numbers = [10, 20, 30, 40, 50];
console.log(numbers); // [10, 20, 30, 40, 50]

//Q5 Declare and initialize a boolean array.

//Ans
let booleanValues = [true, false, true, true];
console.log(booleanValues);

//Q6 Declare and initialize a mixed array.

//ANS
let mixedArray = ["John", 25, true, null, {city: "Karachi"}];
console.log(mixedArray); 

//Q7 Declare and Initialize an array and store available
//education qualifications in Pakistan (e.g. SSC, HSC, BCS,
 //BS, BCOM, MS, M. Phil., PhD). Show the listed
//qualifications in your browser

//ANS
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Educational Qualifications in Pakistan</h2>");
document.write("<ol>");
qualifications.forEach(qual => {
    document.write(`<li>${qual}</li>`);
});
document.write("</ol>");

//Q8 Write a program to store 3 student names in an array.Take
//another array to store score of these three students.
//Assume that total marks are 500 for each student, display
//the scores & percentages of students like:


//ans
const students6 = ["Ali", "Bilal", "Chaudhry"];
const scores = [430, 380, 410];
const totalMarks4 = 500;
console.log("Student Results");
console.log("----------------------------------");
console.log("Name\t\tScore\t\tPercentage");
console.log("----------------------------------");

for (let i = 0; i < students6.length; i++) {
    const percentage6 = (scores[i] / totalMarks) * 100;
    console.log(`${students6[i]}\t\t${scores[i]}/${totalMarks4}\t\t${percentage6.toFixed(2)}%`);
}

console.log("----------------------------------");


//Q9 Initialize an array with color names. Display the array
//elements in your browser.
//a. Ask the user what color he/she wants to add to the
///beginning & add that color to the beginning of the array.
//Display the updated array in your browser.
//b. Ask the user what color he/she wants to add to the end
//& add that color to the end of the array. Display the
//updated array in your browser.
//c. Add two more color to the beginning of the array.
//Display the updated array in your browser.
//d. Delete the first color in the array. Display the updated
//array in your browser.
//e. Delete the last color in the array. Display the updated
//array in your browser.
/////f. Ask the user at which index he/she wants to add a color
//& color name. Then add the color to desired
//position/index. . Display the updated array in your
//browser.
//g. Ask the user at which index he/she wants to delete
//color(s) & how many colors he/she wants to delete. Then
//remove the same number of color(s) from user-defined
//position/index. . Display the updated array in your
//browser.

//ANS

let colors = ["Red", "Green", "Blue"];
console.log("Initial array:", colors);


let colorToAddStart = prompt("Enter color to add to beginning:");
colors.unshift(colorToAddStart);
console.log("After adding to beginning:", colors);


let colorToAddEnd = prompt("Enter color to add to end:");
colors.push(colorToAddEnd);
console.log("After adding to end:", colors);

colors.unshift("Yellow", "Orange");
console.log("After adding two more to beginning:", colors);

colors.shift();
console.log("After deleting first color:", colors);

colors.pop();
console.log("After deleting last color:", colors);

let insertIndex = parseInt(prompt("Enter index to add color:"));
let insertColor = prompt("Enter color to add:");
if (insertIndex >= 0 && insertIndex <= colors.length) {
    colors.splice(insertIndex, 0, insertColor);
} else {
    console.log("Invalid index");
}
console.log("After inserting at position:", colors);

let deleteIndex = parseInt(prompt("Enter index to delete from:"));
let deleteCount = parseInt(prompt("How many colors to delete?"));
if (deleteIndex >= 0 && deleteIndex < colors.length && 
    deleteCount > 0 && (deleteIndex + deleteCount) <= colors.length) {
    colors.splice(deleteIndex, deleteCount);
} else {
    console.log("Invalid index or count");
}
console.log("Final array after deletions:", colors);

//Q10 Write a program to store student scores in an array &
//sort the array in ascending order using Array’s sort
//method.

//ans
let scores9 = [85, 92, 78, 95, 88];
scores.sort((a, b) => a - b); // Ascending order
console.log("Sorted Scores (Ascending):", scores9);

//Q11 Write a program to initialize an array with city names.
//Copy 3 array elements from cities array to selectedCities
//array.

//ans

let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
let selectedCities = cities.slice(0, 3); 
console.log("Selected Cities:", selectedCities);

//Q12 Write a program to create a single string from the
//below mentioned array:
//var arr = [“This ”, “ is ”, “ my ”, “ cat”];
//(Use array’s join method)

//ans
let arr = ["This ", " is ", " my ", " cat"];
let sentence = arr.join(""); // Join without separator
console.log("Combined String:", sentence);

// Q13 Create a new array. Store values one by one in such a way
//that you can access the values in the order in which they
//were stored. (FIFO-First In First Out)

//ans
let queue = [];
queue.push("First"); // Enqueue
queue.push("Second");
queue.push("Third");

console.log("Queue:", queue);
console.log("Dequeued:", queue.shift()); // Dequeue (FIFO)
console.log("Remaining Queue:", queue);

// Q14 Create a new array. Store values one by one in such a way
//hat you can access the values in reverse order. (Last In-
//First Out)

//ans
let stack = [];
stack.push("First"); // Push
stack.push("Second");
stack.push("Third");

console.log("Stack:", stack);
console.log("Popped:", stack.pop()); // Pop (LIFO)
console.log("Remaining Stack:", stack);

//Q15 Write a program to store phone manufacturers (Apple,
//Samsung, Motorola, Nokia, Sony & Haier) in an array.
//Display the following dropdown/select menu in your
//browser using document.write() method:

//ans
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

console.log("Phone Manufacturers Dropdown:");
console.log("<select>");
manufacturers.forEach(brand => {
    console.log(`  <option value="${brand.toLowerCase()}">${brand}</option>`);
});
console.log("</select>");

// For browser display:
document.write(`
    <select>
        ${manufacturers.map(brand => `<option value="${brand.toLowerCase()}">${brand}</option>`).join('')}
    </select>
`);


// chap 17-20

//Q1 Declare and initialize an empty multidimensional array.
//(Array of arrays)

//ANS
let multiArray = [[], [], []];
console.log("Empty Multidimensional Array:", multiArray);

//Q2 Declare and initialize a multidimensional array
//representing the following matrix:

//ANS
let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    console.log("Matrix:", matrix);

 //Q3 Write a program to print numeric counting from 1 to 10.
 
 //ANS
 console.log("Counting 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Q4 Write a program to print multiplication table of any
//number using for loop. Table number & length should be
//taken as an input from user. 

//ans
let number9 = parseInt(prompt("Enter number for multiplication table:"));
let length1 = parseInt(prompt("Enter table length:"));
console.log(`Multiplication Table of ${number9}:`);
for (let i = 1; i <= length1; i++) {
    console.log(`${number} × ${i} = ${number * i}`);
}

//Q5 Write a program to print items of the following array
//using for loop:
//fruits = [“apple”, “banana”, “mango”, “orange”,
//“strawberry”]


//ans
let fruits4= ["apple", "banana", "mango", "orange", "strawberry"];
console.log("Fruits:");
for (let i = 0; i < fruits4.length; i++) {
    console.log(fruits[i]);
}

// Q6 Generate the following series in your browser. See
//example output.
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//ans
console.log("Counting:");
console.log(Array.from({length: 15}, (_, i) => i + 1).join(', '));

console.log("Reverse Counting:");
console.log(Array.from({length: 10}, (_, i) => 10 - i).join(', '));

console.log("Even:");
console.log(Array.from({length: 11}, (_, i) => i * 2).join(', '));

console.log("Odd:");
console.log(Array.from({length: 10}, (_, i) => i * 2 + 1).join(', '));

console.log("Series:");
console.log(Array.from({length: 10}, (_, i) => (i + 1) * 2 + 'k').join(', '));

//Q7 You have an array
//A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
///Write a program to enable “search by user input” in an
//array.
//After searching, prompt the user whether the given item is
//found in the list or not. Example:

//ans
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let search = prompt("Enter item to search:").toLowerCase();
let found = A.some(item => item.toLowerCase() === search);
console.log(found ? `${search} is found in list` : `${search} is not found in list`);

//Q8 Write a program to identify the largest number in the
//given array.
//A = [24, 53, 78, 91, 12].

//ans
let numbers5 = [24, 53, 78, 91, 12];
console.log("Largest Number:", Math.max(...numbers5));

//Q9 Write a program to identify the smallest number in the
//given array.
//A = [24, 53, 78, 91, 12]

//ans
let numbers8= [24, 53, 78, 91, 12];
console.log("Smallest Number:", Math.min(...numbers8));

//Q10 Write a program to print multiples of 5 ranging 1 to
//100.

//ans
console.log("Multiples of 5 (1-100):");
for (let i = 5; i <= 100; i += 5) {
    console.log(i);
}