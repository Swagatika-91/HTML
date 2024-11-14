//Comments in JS - Part of code which is not executed
//Single line comment
/*multi - line comment*/

//Arithmetic, Unary, Assignment, Comparison, Logical Operators in JS
let a = 2;
let b = 4;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);
console.log("a =", a++);//Post increment- a=2 then 2+1=3
console.log("a =", ++a);//pre increment- 3+1=4 then a=4
console.log("a =", a--);//post decrement- a=4 then 4-1=3
console.log("a =", --a);//pre decrement- 3-1=2 then a=2
console.log("a =", a+=3);//a = a+3 =5
console.log("a =", a-=5);//a = a-5 = 0
console.log("a =", a*=2);
console.log("a =", a/=3);
console.log("a =", a**=5);
console.log("a =", a%=7);
console.log("a == b", a==b);//uses boolean value to compare-True/False
console.log("a != b", a!=b);//boolean value
console.log("a === b", a===b);//boolean value
console.log("a !== b", a!==b);//boolean value
console.log("a > b", a>b);//boolean value
console.log("a < b", a<b);//boolean value
console.log("a <= b", a<=b);//boolean value
console.log("a >= b", a>=b);//boolean value
console.log("a>b && a<b =", a>b && a<b);//Both conditions must be True- True or else will be False
console.log("a>=b || a<=b =", a>=b || a<=b);//Any one condition must be True- True or else False
console.log("!(a>b) =", !(a>b));//Changes from True-False/False-True

//CONDITIONAL STATEMENTS - If, If-else, else-if
//Practice Question - 4
let age = 16;
if (age >= 18) {
console.log("You can vote");
}
if (age < 18) {
    console.log("You cannot vote"); //If statement
}

//Practice Question -5
let mode = "blue"; //if-else statement
let colour;
if (mode === "dark-mode") {
    colour = "black";
} else {
    colour = "white";
}
console.log(colour);

//Practice Question - 6
let year = 35;
if (year >=18) {
    console.log("You can vote"); //if-else statement
} else {
    console.log("You cannot vote");
}

//Practice Question - 7
let num = 7;
if (num/2===0) {
    console.log(num, "is even"); //if-else statement
} else {
    console.log(num, "is odd");
}

//Practice Question - 8
let child = 20;
if (child < 15) {
    console.log("senior student");
} else if (child > 15) {
    console.log("intermediate student"); //if, else-if, else statement
} else {
    console.log("graduate student");
}

//Practice Question - 9
let background = "dark";    //if, else-if, else-if, else statement
let color;
if (background === "dark") {
    color = "black";
} else if (background === "orange") {
    color = "orange";
} else if (background === "green") {
    color ="green";
} else {
    color = "white";
}
console.log(color);

//Practice Question - 10
let variety = "silver";
let shade;
if (variety === "blue") {     
    shade = "blue";
} else if (variety === "crimson") {   //if, else-if, else-if, else statement 
    shade = "crimson";
} else if (variety === "dark") {
    shade = "black";
} else {
    shade = "white";
}
console.log(shade);

//Ternary Operators in JS - Compact if-else (Condition ? True ouput : False output)
let candidate = 56;
let result = candidate >= 18 ? "adult" : "not adult";
console.log(result);

//Practice Question - 11 (Prompt- User Input)
//let number = prompt ("Enter a number:");
//if (number % 5 === 0) {
  //  console.log(number, "is a multiple of 5");
//} else {
  //  console.log(number, "is not a multiple of 5");
//}

//Practice Question - 12
let score = 89;
if (score >= 80 && score <= 100) {
    console.log("Awarded with Grade A");
} else if (score >=70 && score <=89) {
    console.log("Awarded with Grade B");
} else if (score >= 60 && score <=69) {
    console.log("Passed with Grade C");
} else if (score >= 50 && score <= 59) {
    console.log("Promoted with Grade D");
} else if (score >=0 && score <=49) {
    console.log("Grade D");
} else {
    console.log("Failed");
}

//Loops - Executes a piece of code again & again

//for-loop (initialize, stopping condition, updation : ALL BEFORE LOOP)
for(let i=1; i<=5; i++) {
    console.log("Swagatika");
}
//Practice Question - 13
//Calculate Sum of 1 to 5
let sum = 0;
for(let i=1; i<=5; i++) {
    sum = sum + i;
}
    console.log("sum =", sum);
    console.log("loop has ended");
//Practice Question - 14
//Print 1 to 5
for(let i=1; i <=5; i++) {
    console.log("i =", i);
}
console.log("loop has ended");

//while loop (initialization & stopping condition {BEFORE LOOP}, updation {INSIDE LOOP})
let i = 1;
while(i<5) {
    console.log("i =", i);
    i++;
}
console.log("loop has ended");

//do-while loop (initialization {BEFORE LOOP}, updation {INSIDE LOOP}, stopping condition {AFTER LOOP})
let j = 1;
do{
    console.log("j =", j);
    j++;
} while(j<=8);
console.log("loop has ended");

//for-of loop (iterates on special data types like Strings & Arrays) : iterator
let str = "Abhijeet is a student";
for(let i of str) { //iterator
    console.log("i =", i);
}
//Practice Question - 15
let val = "MYHOME";
for(let i of val) {
    console.log("i =", i);
}
//Practice Question - 16
let trp = "JAVASCRIPT";
let length = 0;
for(let i of trp) {
    length = length + 1;
}
console.log("length is =", length);
//Practice Question - 17
let ptr = "JAVASCRIPT";
let size = 0;
for(let i of ptr) {
    console.log("i =", i);
    size++;
}
console.log("string size =", size);

//for-in loop (iterates on Objects & Arrays) : each iteration returns a key whose value is accessed to object
let student = {
    name : "Riya",
    class : 10,
    cgpa : 7.45,
    isPass : true,
};
for(let key in student) {
    console.log("key =", key, "value=", student[key]);
}

//Practice Question - 18
//Print all even numbers from 0 to 100
for(let i=0; i<=100; i++) {
    if(i % 2 === 0) {
    console.log("Even numbers are =", i);
}
}
//Practice Question - 19
//Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value
// let gameNum = "34.34";
// let k = prompt("Guess any number");
// while (k !== gameNum) {
    // k = prompt("Try again");
// }
// console.log("Congratulations !");

//Strings - A sequence of characters to represent text (Inbuilt properties(variables) & Functions(methods)) - Strings are immutable in JS
let ln = "Mad";
let ln2 = 'dam';
console.log(ln[0]); //Position or Index of individual character 0 in the string "Mad" : M
console.log(ln2[2]);//Position 2 in the string 'dam': m

//Template literals in JS - a way to have embedded expressions in strings
let template = `This is a template literal`;
console.log(template);
console.log(typeof template);//string

//String Interpolation - `string text ${expression} string text`   [To create strings by doing substitution of placeholders]
//Practice Question - 20
let obj = {
    item : "Pen",
    price : 10,
}
let output = `cost of ${obj.item} is ${obj.price} rupees`;//output : cost of pen is 10 rupees
console.log(output);
console.log(typeof output);

//Escape characters (\n, \t) 
//\n - next line (gives next line to a string)
//\t - tab space
let stri = "Democratic\nCountry";
let strin = "The\tUniverse";
console.log("Democratic\nCountry");
console.log("The\tUniverse");
console.log(stri.length);
console.log(strin.length);

//String Methods (built-in functions to manipulate a string)

//PRACTICE qUESTION -21
let stu = "Swagatika";    //str.toUpperCase()
stu = stu.toUpperCase(); //SWAGATIKA
console.log(stu);

//PRACTICE QUESTION - 22
let stu2 = "Abhijeet";
let stu3 = stu2.toLowerCase(); //str.toLowerCase()
console.log(stu2); //Abhijeet
console.log(stu3); //ABHIJEET

//PRACTICE QUESTION - 23
let sentence = "    I am   an      Indian                  ";
sentence = sentence.trim();  //str.trim() : removes or trims white spaces from beginning and end
console.log(sentence);

//PRACTICE QUESTION - 24
let cand = "My School";
console.log(cand.slice(3,6)); //str.slice(start,end) : returns a desired part of string & end of the index is non-inclusive and the old string is not changed

//PRACTICE QUESTION -25
let cn = "JAVASCRIPT";
console.log(cn.slice(1)); // str.slice(start) : displays from starting (start) character to end....

//PRACTICE QUESTION - 26
let str1 = "candidate";    //str1.concat(str2) : joins str2 with str1
let str2 = "genius";
console.log(str2.concat(str1));

//PRACTICE QUESTION - 27
let str3 = "candidate";
let str4 = "genius";
let res = str3 + 123;  //candidate123
console.log(res);

//PRACTICE QUESTION - 28
let cn1 = "JAVASCRIPT";
console.log(cn1.replace("S", "n")); //str.replace("searchVal", "newVal") : replaces desired value to new value

//PRACTICE QUESTION - 29
let cn2 = "JAVASCRIPT";
console.log(cn2.replaceAll("A", "m")); //str.replaceAll("searchVal", "newVal") : replaces all matching value to new val

//PRACTICE QUESTION - 30
let cn3 = "JAVASCRIPT";
console.log(cn3.charAt(4)); //str.charAt(index) : finds the character for the desired index

//PRACTICE QUESTION - 31
let username = prompt ("Enter your full name");
let st = "@";
let st1 = username.length;
console.log(st+username.concat(st1));

