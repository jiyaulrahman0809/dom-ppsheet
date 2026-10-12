// Create a heading with an id of title and use getElementById() to select it and change its text.
// let heading = document.getElementById("title");
// heading.textContent = "helloJs"

// Create a paragraph with a class description and use querySelector() to select it and change its text
// content.
// Example:
// HTML: <p class="description">Old Text</p>
// Output: New Description

// let para = document.querySelector(".para");

// para.textContent = "New Description"

// Create three <li> elements with the class item. Use querySelectorAll() to select all of them and change
// their text color using the style property.
// Example:
// HTML: <li class="item">HTML</li>
// <li class="item">CSS</li>
// <li class="item">JavaScript</li>
// Expected Result: All three list items should have the changed text color.

// let listItems = document.querySelectorAll(".item");
//  listItems.forEach((item)=>{
//         item.style.color = "blue";
//  })

// Create a paragraph containing some text and use textContent to replace its content with a new message.
// Example:
// Before: <p id="message">Old Message</p>
// After: Welcome to JavaScript!

// let para = document.querySelector(".para");

// para.textContent ="Newtext"

// Create a <div> with an id of container and use innerHTML to add a heading and a paragraph inside it.
// Example:
// Expected HTML inside the container:
// <h2>My Website</h2>
// <p>Welcome to my website!</p>
// let div = document.getElementById("cont");

// div.innerHTML =
// `
//  <h2>My Website</h2>
//  <p>Welcome to my website!</p>
// `;

// Create an image element and use setAttribute() to change its src and alt attributes.
// Example:
// HTML: <img id="profileImage" src="old.jpg" alt="Old Image">
// Expected Result: The image should have the new src and alt values.

// let image = document.getElementById("profileImage");
// image.setAttribute("src","new")
// image.setAttribute("alt","values")
// image.getAttribute();

// Create a button and use classList.add() to add a class to it. Then use classList.remove() to remove the
// class.
// Example:
// HTML: <button id="btn">Click Me</button>
// Expected Result: The button should have the class added and then removed using JavaScript.

// let button = document.getElementById("btn");
// button.classList.add("new");
// button.classList.remove("new")

// Create a heading and use the style property to change its color, fontSize, and backgroundColor.
// Example:
// HTML: <h1 id="heading">JavaScript</h1>
// Expected Result: The heading should display with the new styles applied through JavaScript.

// let h1 = document.getElementById("heading");

// h1.classList.add("style");
// Create a button with a custom data-id attribute and use the dataset property to read its value.
// Example:
// HTML: <button id="productBtn" data-id="101">View Product</button>
// Output: 101

// let btn = document.getElementById("productBtn");
// console.log(btn.dataset.id); 

// Create a new <p> element using createElement(), add some text to it using textContent, and display it
// on the webpage.
// Example:
// Expected Output: This paragraph was created using JavaScript.

// let para = document.createElement("p");
// para.textContent ="This paragraph was created using JavaScript.";

// let body = document.querySelector("body");
// body.appendChild(para)

// Create a <ul> in HTML. Use JavaScript to create a new <li> element and add it to the list using
// appendChild().
// Example:
// HTML: <ul id="skills"></ul>
// Expected Output: HTML, CSS, JavaScript
let list = document.getElementById("skills");
let listitem = document.createElement("li")
listitem.textContent = "HTML";
list.appendChild(listitem)