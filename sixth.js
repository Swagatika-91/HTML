//DOM Manipulation - Attributes (get, set)
let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");      //.getAttribute
console.log(id);
let name = div.getAttribute("name");
console.log(name);
let para = document.querySelector("p");
console.log(para.setAttribute("class", "new class"));   //.setAttribute

//Style Attributes (directly can be written in JS file too instead using CSS file & can be accessed easily)
//let di = document.querySelector("div");
// di.style.backgroundColor = "black";
// di.style.fontSize = "15px";
// di.style.textAlign = "center";
// di.style.color = "white";
// di.innerText = "Hello Swagatika";
// di.style.width = "200px";
// di.style.height = "20px";

//Create new element, Insert elements (append, prepend, before, after), Delete elements (remove).
let el = document.createElement("button");
el.innerText = "click me!";
console.log(el);
div.append(el);
div.prepend(el);
div.before(el);
div.after(el);
div.append(el);
let p = document.querySelector("p");
console.log(p);
p.append(el);
p.after(el);
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>DOM Manipulation (Part-2)</i>";
document.querySelector("body").prepend(newHeading);
p.remove();

//PRACTICE QUESTION - 47 - appendChild(), removeChild()
//The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node.
//const parah = document.createElement("p");
//document.body.appendChild(p);
//The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node.
//const parent = document.getElementById("parent");
//const child = document.getElementById("child");
// This first call correctly removes the node
//const garbage = parent.removeChild(child);
// Throws NotFoundError
//garbage = parent.removeChild(child);

//PRACTICE QUESTION - 48
let newbtn = document.createElement("button");
newbtn.innerText = "New Button";
newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";
document.querySelector("body").prepend(newbtn);