//DOM - Document Object Model
//3 musketeers of web development : HTML(structure), CSS(style), JS(logic)

//<style> tag connects HTML with CSS - <link rel="stylesheet" href="fifth.css"> (written in <head> tag)
//<script> tag connects HTML with JS - <script src="fifth.js"></script> (written in <body> tag)

console.log("Welcome to Javascript");
alert("What's Up !");

//Window object: A global object, an open window in a browser, a browser's object but not javascript's object(automatically created by browser)
window.alert("hi");

//console.log(window.document) : (prints HTML codes) - document <!DOCTYPE html><html lang="en"><head>...</head><body>...</body>
//console.dir(window.document) : (prints objects) - document

//Accessing DOM elements (#Id, .Class, Tag, Query Selector)
let heading = document.getElementById("heading");//Unique Id
console.dir(heading);
let heading1 = document.getElementsByClassName("heading-class");//Returns HTML collection
console.dir(heading);
console.log(heading);
let paragraph = document.getElementsByTagName("p");//Returns HTML collection
console.dir(paragraph);
let firstElement = document.querySelector(".heading-class");//Returns only First Element
console.dir(firstElement);
let allElements = document.querySelectorAll(".heading-class");//Returns Node List
console.dir(allElements);

// DOM manipulation properties (.tagName, .innerText, .innerHTML, .textContent)
let div = document.querySelector("div");
console.dir(div);
let heading2 = document.querySelector("h2");

//PRACTICE QUESTION -45
let heading3 = document.querySelector("h3");
console.dir(heading3.innerText);
heading3.innerText = heading3.innerText + " Lovely";

//Accessing different texts using properties of DOM manipulation
let divs = document.querySelectorAll(".box");
console.log(divs);
// divs[0].innerText = "Name";
// divs[1].innerText = "Age";
// divs[2].innerText = "Gender";

//PRACTICE QUESTION - 46 (Accessing same texts using for-of loop)
let index = 0;
for(div of divs) {
    div.innerText = `Title ${index}`;
    index++;
}