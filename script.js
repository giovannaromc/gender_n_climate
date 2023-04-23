/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/

// Generate alert
// Will help to visualilze the change in functions, in the system's console
// and on the wesite

// alert("Welcome to my website")
// var cool_text = document.getElementById("id_of_cool_text")
// var text = "The text on the page is: 'Hello Everyone" + cool_text.textContent + "' "
// console.log(text)

// More info on function getElementById
// https://developer.mozilla.org/es/docs/Web/API/Document/getElementById

cool_text.textContent = "It's time to build your own website"

// Concept of Setters y Getters functions to modify objects

function get_text(element){
	return element.textContent
}

function set_text(element, text){
	element.textContent = text
}
set_text(cool_text, "It's time to build your own website!")
console.log("The new cool text is: " + get_text(cool_text))