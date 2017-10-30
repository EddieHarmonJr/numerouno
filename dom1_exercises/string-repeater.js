let input = window.prompt("Enter a string.");

if (input !== "") {
    window.alert(input + " " + input + " " + input) 
} else if (input === "") {
    window.prompt("Invalid input. Please enter a string.")
}