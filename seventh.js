//Events in Javascript (fired to notify code of "interesting changes" that may affect code execution)
//Event handling (the codes that will run when an event fires, allowing web pages to respond appropriately to change)
//Inline event handling (codes that will run when an event fires inside HTML tags/handling events in HTML tags)

//Event handling in JS
let button1 = document.querySelector("#button1");
button1.onclick = () => {
    console.log("button1 was clicked");
    let a = 20;
    a++;
    console.log(a);
}

//Event objects (special obj that has details about the event.All event handlers hv access to the Event handler's properties & methods)
let button2 = document.querySelector("#button2");
button2.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
}

//Event Listeners
//addEventListener()-works by adding a function/object that implements function for the specified event type on the EventTarget on which it's called.
//removeEventListener()-removes an event listener previously registered with EventTarget.addEventListener() from the target.
button1.addEventListener("click", () => {
    console.log("hello ! button1 was clicked once");
})
button1.addEventListener("click", () => {
    console.log("hello ! button1 was clicked twice");
})
const thrice = () => {
    console.log("hello ! button1 was clicked thrice"); //this line is removed after using removeEventListener()
}
button1.addEventListener("click", () => {
})
button1.addEventListener("click", () => {
    console.log("hello ! Stop clicking");
})
button1.removeEventListener("click", thrice);

//PRACTICE QUESTION -49
let modebtn = document.querySelector("#mode");
let currmode = "light";
modebtn.addEventListener("click", () => {
    if(currmode === "light") {
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = "red";
    } else {
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currmode);
})