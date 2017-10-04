var current_year = 2020;
var birth_year = 1995;

var age = current_year - birth_year;
var age2 = age - 1;

console.log("I will be " + age2 + " or " + age + " in " + current_year);
// console.log("I will be", age2, "or", age, "in", current_year);
// Two ways of doing the same thing


var current_age = 25;
var max_age = 90;
var estimated_snacks_per_day = 2;
var days = (max_age - current_age) * 365;
var total_snacks = days * estimated_snacks_per_day;


console.log("You will need", total_snacks, "to last you until the age of", max_age, ".");


var celsius_temperature = 40;
var fahrenheit_equation = (celsius_temperature * (9/5)) + 32;
var celsius_equation = (fahrenheit_equation - 32) * (5/9);

console.log("The temperature from NN°C to NN°F is " + celsius_temperature + " to " + fahrenheit_equation);
console.log("The temperature from NN°F to NN°C is " + fahrenheit_equation + " to " + celsius_equation);



