const product = {
    name : "Ball pen",
    price : 270,
    offer : 5,
    rating : 4,
    people : 7002,
    isDeal : true
};
const profile = {
    name : "Shradha",
    followers : 195,
    following : 32,
    isFollow : true,
    address : "daily market"
};
console.log(profile);
console.log(profile.address);
console.log(profile["address"]);
//arithmetic operators
let a = 5;
let b = 3;
console.log("a =",a, " & b =",b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a / b =", a / b);
console.log("a * b =", a * b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);
console.log("a = ", a++);//a=5, this is called post increment, first the value is used and then increased
console.log("a = ", ++a);//a=7, this is called pre increment, first the value is increased and then used
console.log("a = ", a--);//7
console.log("a = ", --a);//5
console.log("a =", a += 4);
let x = 123;
let y = "123";
console.log(x==y);//true
console.log(x===y);//false
alert("Pratyush");
alert(x);
let j = prompt("Enter a number");
console.log(j);
let rem = j%5;
if (rem == 0) {
    console.log("Input is multiple of 5");
} else  {
    console.log("Input is not multiple of 5");
}