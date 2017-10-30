let number = window.prompt("Enter a number.");

if (number % 2 !== 0 && number % 1 !== 0) {
    window.alert("This is not a number")
} else if (number % 2 === 0) {
    window.alert("This is an even number.")
} else if (number % 2 !== 0) {
    window.alert("This is an odd number.")
}