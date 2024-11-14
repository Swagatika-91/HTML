//Synchronous program - code runs in a particular sequence of instructions given in the program.
console.log("one");
console.log("two");
console.log("three");
console.log("four");


//Asynchronous program - code execution allows to execute next instructions immediately & doesn't block the flow
console.log("one");
console.log("two");
setTimeout(() => {
    console.log("hello");
}, 4000);                  //setTimeout function is used for 4s = 4000 ms
console.log("three");
console.log("four");


//Callbacks - a function passed as an argument to another function
function sum(a, b) {
    console.log(a + b);
}
function calculator(a, b, sumCallback) {  //Synchronous program Callback (sum)
    sumCallback(a, b);
}
calculator(1, 2, sum);

const hello = () => {
    console.log("hello");
};
setTimeout(hello, 3000);              //Asynchronous program Callback (setTimeout)


//Nested if-else
let age = 20;
if(age>=18) {
    if(age>=60) {
        console.log("senior");
    } else {
        console.log("teenager");
    }
} else {
    console.log("child");
}


//Nested loops
for(let i = 0; i < 5; i++) {
    str = "";
    for(let j = 0; j < 5; j++) {
        str = str + j;
    }
    console.log(i, str);
}


//Callback Hell - Nested callbacks stacked below one another forming a pyramid structure (Pyramid of doom)
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
            });
        });
    });


//Promises - "Eventual" completion of task, an object in JS, a solution to callback hell
let promise = new Promise((resolve, reject) => {
    console.log("promise is a solution to callback");
     resolve(123);
 });
    let promise1 = new Promise((resolve, reject) => {
        console.log("promise is a solution to callback");
        reject("some error occured");
 });

function getData(dataId, getNextData) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if(getNextData) {
                getNextData();
            }
        }, 5000);
    });
}


//.then() & .catch()
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("It's a promise");
        resolve("success");
        reject("error");
    });
};
let promise3 = getPromise();
promise3.then((res) => {                   //.then() used after promise gets fulfilled
    console.log("promise fulfilled", res);  
});
promise3.catch((err) => {                  //.catch() used after promise gets rejected
    console.log("rejected", err);
});


//Promise chain
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("some data1");
        resolve("success");
    }, 4000);
});
};

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("some data2");
        resolve("success1");
    }, 4000);
});
};

console.log("fetching data1");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log("fetching data2");
    let p2 = asyncFunc2();
    p2.then((res) => {
    });
});


//PRACTICE QUESTION -55
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}
getData(1).then((res) => {
    return getData(2);
})
.then((res) => {
    return getData(3);        //Promise chaining program
})
.then((res) => {
    console.log(res);
});


//Async-Await - async() always returns a promise, await() pauses the execution of its surrounding async function until the promise is settled
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}
async function getWeatherData() {
    await api();
}


//PRACTICE QUESTION - 56
function getMyData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}
async function getAllData() {
    await getMyData(1);
    await getMyData(2);
    await getMyData(3);
    await getMyData(4);
}


//IIFE - Immediately Invoked Function Expression (a function that is called immediately as soon as it is defined)
function getYourData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}
(async function () {
    await getYourData(1);
    await getYourData(2);
    await getYourData(3);
    await getYourData(4);
})();