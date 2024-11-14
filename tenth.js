//Objects - A javascript obj is an entity having properties & methods (special property called Prototype)
const student = {
    fullName: "Swagatika Das",
    marks: 87,
    printMarks: function () {
        console.log("marks = ", this.marks); //(student.marks)
    },
};

//Prototypes in JS - (.__proto__)
//const employee = {
//     calcTax1() {
//         console.log("tax rate is 10%");
//     },
//     calcTax2: function () {
//         console.log("tax rate is 10%"); [2 ways of writing functions in an object]
//     },
// };
const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};
const harish = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 20%");
    },
};
harish.__proto__ = employee;

//Class - A program-code template for creating objects having Variables & Functions
class ToyotaCar {
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brand = brand;
    }
    
}
let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("lexus");

//Constructor in JS - constructor() method is automatically invoked by new & constructor() method initializes object
class Hyundae {
    constructor(brand,mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;    
    }
}
let fortuner1 = new Hyundae("fortuner1", 10);
console.log(fortuner1); 

//Inheritance in JS - Passes down properties & methods from Parent class to Child class
class Person {
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");         //Parent class
    }
}

class Engineer extends Person {
    work() {
        console.log("solve & build");   //Child class
    }
}
let swagobj = new Engineer();



//Method Overriding - If Child class & Parent class have same function, then function of Child class will be invoked
class Person1 {
    eat() {
        console.log("eatttt");
    }
    sleep() {
        console.log("sleepppp");
    }
    work() {
        console.log("nothing");         //Parent class
    }
}

class Engineer1 extends Person1{
    work() {
        console.log("solve & buildddd");   //Child class
    }
}
let swagobj1 = new Engineer1();

//PRACTICE QUESTION - 50 (using a constructor method for both Parent & Child class simultaneously)
class Person2 {
    constructor() {
        this.species = "homo sapiens"; 
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("nothing");  //Parent class
    }
}

class Engineer2 extends Person2 {
    work() {
        console.log("hardwork");  //Child class
    }
}
let p2 = new Person2();
let e2 = new Engineer2();

//super Keyword - to invoke Parent's class constructor
class Person3 {
    constructor() {
        this.species = "homo sapiens"; 
    }
    eat() {
        console.log("eat");
    }
    work() {
        console.log("nothing");  //Parent class
    }
}

class Engineer3 extends Person3 {
    constructor(branch) {
        super();                      //passing a variable (branch) in child class using super keyword to invoke parent's class constructor 
        this.branch = branch;                   
     }
      work() {
        console.log("hardwork");  //Child class
    }
}
let obj = new Engineer3("Software IT");

//PRACTICE QUESTION - 51
class Person4 {
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;               //passing a variable (name) in parent class
    }
    eat() {
        console.log("eat");
    }
    work() {
        console.log("nothing");  //Parent class
    }
}

class Engineer4 extends Person4 {
    constructor(name) {
        super(name);                   
     }
      work() {
        console.log("hardwork");  //Child class
    }
}
let newObj = new Engineer4("Swagatika");

//PRACTICE QUESTION - 52
class Person5 {
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("eat");
    }
    work() {
        console.log("nothing");  //Parent class
    }
}

class Engineer5 extends Person5 {
    constructor(name) {
        super(name);                   
     }
      work() {
        super.eat();              //invokes (eat) function from Parent's class
         console.log("hardwork");  //Child class
    }
}
let objects = new Engineer5("Swagatika");

//PRACTICE QUESTION - 53
let DATA = "view secret datas";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("data = ", DATA);
    }
}
let student1 = new User("Swagatika", "abcd@gmail.com");
let student2 = new User("Abhijeet", "defg@email.com");

//PRACTICE QUESTION - 54
let DATAS = "view secret datas";
class User1 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("data = ", DATAS);
    }
}

class Admin extends User1 {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATAS = "edits data";
    }
}
let student3 = new User1("Swagatika", "abcd@gmail.com");
let student4 = new User1("Abhijeet", "defg@email.com");
let student5 = new Admin("Harry", "hijk@gmail.com");

//Error Handling - we can use try-catch block to find errors wherever suspected
let a = 3;
let b = 4;
console.log("a =", a);
console.log("b =", b);
console.log("a+b = ", a + b);
try {
    console.log("a+b = ", a + c);
} catch (err) {
    console.log(err);
}
console.log("a*b =", a * b);