let element = window.prompt("Write an HTML element.");

let container = document.getElementById('container');

container.innerHTML = element;


// container.innerText = element
// When the above is used, it will take literally everything the user types in and put it on the page and inside the requested element.