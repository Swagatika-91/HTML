//boiler plate code - ! in html

//javascript codes
console.log("My College");
console.log("I love moma");

//variables
name = "Lovely";
console.log(name);
age = 12;
console.log(age);
x = null;
console.log(x);
y = undefined;
console.log(y);
name = 23;
console.log(name);

//var let const
var age = 2;
var age = 3;
var age = 4;
console.log(age);
let a = 23;
a = 34;
a = 32;
console.log(a);
const b = 10;
console.log(b);

//blocks
{
    let a = 2;
    console.log(a);
}
{let b = 1;
console.log(b);
}
//Primitive & Non-Primitive data types
let seat = 33;//number
console.log(seat);
let s = "lovely";//string
console.log(s);
isFollow = true;//boolean
console.log(isFollow);
z = 6.34;//undefined
let r = null;//object
let c = BigInt("453");//bigint
let w = Symbol("Go India Go!");//symbol

//Practice Question- 1
//Objects - collection of values (pairs of key : values)
const student = {
    fullName : "Prince",
    class : 10,
    age : 15,
    cgpa : 7.32,
    grade : "A+",
    isPass : true,
};
console.log(student["class"]);//2 ways to code
console.log(student.class);

//additional changes after making an object
student ["age"] = student ["age"] + 1;
console.log(student["age"]);
student ["grade"] = "B+";
console.log(student["grade"]);

//Practice Question - 2
const product = {
    name : "Ball pen",
    rating : 4,
    price : 270,
    people : 7002,
    discount : 5,
    isDeal : true,
};

//Practice Question - 3
const profile = {
    username : "@Chintu",
    followers : 8,
    following : 2,
    haters : "Infinity",
    isFollow : false,
    posts : "wastage of time",
    address : "washroom",
};