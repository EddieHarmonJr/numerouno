let id = window.prompt("Please enter an id");

let string = window.prompt("Please enter a word");

if (document.getElementById(id) === null) {
    alert("no id found")
} else {
    document.getElementById(id).innerText = string;
}


