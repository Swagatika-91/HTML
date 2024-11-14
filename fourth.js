//Arrays - collection of items (MUTABLE)
let marks = [67,45,89,99,93,25];
console.log(marks);
let heroes = ["hulk", "antman" ,"ironman", "spiderman", "shaktiman", "wonderwoman"];
console.log(heroes);

//LOOPS - uses Iterables (Strings[characters], Objects[key-values], Arrays[collection])

//for loop
let array = [5,6,7,4,0,9];
for(let i=0; i<array.length; i++) {
    console.log(array[i]);
}



//for-of loop
let heroes1 = ["hulk", "antman" ,"ironman", "spiderman", "shaktiman", "wonderwoman"];
for(let el of heroes1) {
    console.log(el);
}


//PRACTICE QUESTION -32
let heroes2 = ["hulk", "antman" ,"ironman", "spiderman", "shaktiman", "wonderwoman"];
for(let el of heroes2) {
    console.log(el.toUpperCase(heroes2)); 
}


//PRACTICE QUESTION -33
//Find the Average marks of entire class of an array of students' marks [85,97,44,37,76,60] using for loop
let mark = [85,97,44,37,76,60];
let sum = 0;
for(let i=0; i<mark.length; i++) {
    sum = sum + mark[i];
}
console.log("sum =", sum);
let avg = sum/mark.length;
console.log("avg =", avg);



//PRACTICE QUESTION -34
//Find the Average marks of entire class of an array of students' marks [85,97,44,37,76,60] using for-of loop
let mark1 = [85,97,44,37,76,60];
let sum1 = 0;
for(let val of mark1) {
    sum1 += val;
}
console.log("sum1 =", sum1);
let avg1 = sum1/mark1.length;
console.log("avg1 =", avg1);



//PRACTICE QUESTION -35
let i = 0;
let arr = [250,645,300,900,50];
for(let el of arr) {
    let discount = el * 10/100;
    arr[i] = el - discount;
    i++;
}
i = 0;
arr = [250,645,300,900,50];
for(let el of arr) {
    let discount = el * 10/100;
    arr[i] -= discount;
    i++;
}



//ARRAY METHODS 
//.push() - Adds to end
//.pop() - delete from end & return
//.toString() - converts array to string
//.concat() - joins multiple arrays & returns result
//.unshift() - adds to start
//.shift() - deletes from start & return
//.slice() - returns desired piece of an array, last index is non-inclusive, original array does not change after using slice method
//.splice() - changes original array, .splice(add,remove,replace)/.splice(start idx,delete count,new element)
let arr1 = [250,645,300,900,50];
arr1.push(34,23,453);
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.toString();
console.log(arr1);
let arr2 = ["hulk", "antman" ,"ironman", "spiderman", "shaktiman", "wonderwoman"];
let arr3 = [250,645,300,900,50];
let arr4 = arr2.concat(arr3, arr1);
arr2.unshift("thor");//adds thor at start
arr2.shift();//deletes thor from start
arr2.slice(1,2);//"antman"
arr2.splice(0,3,"aquaman");//['aquaman', 'wonderwoman']
//PRACTICE QUESTION -36
let r = ["abc","def","rtg","hjg","tui"];
console.log(r);
console.log(r.shift());
console.log(r.splice(3,1,"ola"));
console.log(r.push("amazon"));



//FUNCTIONS - block of code performs a specific task, invoked/called whenever needed
function myName(msg) { //function definition (parameter) = like local variables of function (block scope variables)
    console.log(msg);
}
myName("I am a girl"); //function call/invoked (argument)
function myStudent(msg, n) {
    console.log(msg * n);
}
myStudent("I love JS, 100"); //NaN - Not a Number (means not valid)
//PRACTICE QUESTION - 37
function add(x, y) {
    return x + y;
}
let sum11 = add(1, 3);
console.log(sum11);



//Arrow function - Compact way of writing a function
const mul = (x, y) => {
    return x*y;
}
let mul1 = mul(3, 4);
console.log(mul1);

//PRACTICE QUESTION - 38
function findVowel(str) {
    let count = 0;
    for(const ch of str){
         if (ch === "a" || ch === "e" || ch === "i" || ch === "O" || ch === "u") {   //Using Function to find vowels in a string
count++;
    }
    }
    console.log(count);
    return count;
}
//PRACTICE QUESTION - 39
const countVow = (str) => {
    let count = 0;
    for(const ch of str) {
        if(ch === "a" || ch === "e" || ch === "i") {    //Using Arrow function to find vowels in a string
            count++;
         }
    }
    console.log(count);
    return count;
}


//forEach() loop - array.forEach(callbackfunction). Callback is a function used as an argument to another function
//optional case -- We can use 3 parameters in a callback function (value/items, index/position, array)
//forEach() loop can only be used in case of arrays not for strings
//Higher Order Function/Method - either take another function as a PARAMTER inside them/they RETURN another function as their output
let ar = [2,3,4,5];
ar.forEach(function print(val) {   //using function
    console.log(val);
})
ar.forEach((val, i, x) => {    //using arrow function
    console.log(val, i);
    console.log(x); 
})
//PRACTICE QUESTION - 40
//Calculate squares of each element in an array
let a = [1,2,3,4];
a.forEach((b) => {
    console.log(b * b);  //arrow function
})
let c = [6,66,666,6666];
let calcSquare = (val) => {
    console.log(val * val);
}
c.forEach(calcSquare);


//map method - creates a new array with the results of some operations
let num = [76,45,56,487];
num.map((val) => {
    console.log(val);
})
let newArray = num.map((val) => {
    return val;
})
console.log(newArray);


//filter method - creates a new array of elements that gives true for a condition/filter
let f = [5,6,7,8,9,24];
let oddArr = f.filter((val) => {
    return (val%2 !== 0);
})
console.log(oddArr);
//PRACTICE QUESTION - 41
let t = [6,7,8,9,24];
let grtNum = t.filter((val) => {
    return val > 6;
})
console.log(grtNum);


//reduce method - performs some operations & reduces the array to a single value, returns that single value
let sum2 = [5,6,7,4,6];
const output = sum2.reduce((prev, curr) => {
    return (prev + curr);
})
console.log(output);

//PRACTICE QUESTION - 42
let large =  [5,6,7,4,16];
const res = large.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
})
console.log(res);

//PRACTICE QUESTION - 43
let score = [87,49,98,99,76,93];
let toppers = score.filter((val) => {
    return val>90;
})
console.log(toppers);

//PRACTICE QUESTION - 44
let n = prompt ("Enter any number");
let array1 = [];
for(let i=1; i<=n; i++) {
    array1[i-1] = i;
}
console.log(array1);
let sum3 = array1.reduce((prev, curr) => {
    return (prev + curr);
})
console.log("sum3 =", sum3);
let factorial = array1.reduce((prev, curr) => {
    return (prev * curr);
})
console.log("factorial =", factorial);