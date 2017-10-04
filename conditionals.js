// var num = 3
// if (num > 2) {
//     console.log('it\'s larger than 2')
// } else {
//     console.log("it's not larger than 2")
// }

//var cat_count = 'a'

// console.assert(typeof(cat_count) === 'number', "cat_count is a number")


// var age = 18;
// var day_week = "Monday";

// console.assert(typeof (age) === 'number' && (age) !== undefined, "age ain't nothin but a number")

// if (age >= 21 && day_week !== 'Sunday') {
//     console.log("You're good to go! Bottoms up!")
// } else if (age >= 21 && day_week === 'Sunday'){
//     console.log("Sorry no liquor sales today")
// } else {
//     console.log("Sales not allowed or permitted today.")
// }

// var dog_count = 7

// if (dog_count === 0) {
//     console.log("Where is Luna?")
// } else {
//     console.log("There are " + dog_count + " dogs")
// }


// var dog_count

// if (!dog_count) {
//     console.log("Where is Luna?")
// }

// var day = 16;
// if (day === 3 || day ===10 ||day === 17 || day ===24){
//     console.log("Sunday")
// } else if (day === 4 ||day === 11 || day ===18 ||day === 25) {
//     console.log("Monday")
// } else if (day === 5 || day ===12 ||day === 19 || day ===26) {
//     console.log("Tuesday")

// } else if (day === 6 || day ===13 ||day === 20 || day ===27) {
//     console.log("Wednesday")

// } else if (day === 7 || day ===14 ||day === 21 || day ===28) {
//     console.log("Thursday")

// } else if (day === 1 || day ===8 ||day === 15 || day ===22 || day ===29) {
//     console.log("Friday")

// } else if (day === 2 ||day === 9 || day ===16 || day ===23 ||day === 30) {
//     console.log("Saturday")
// } else {
//     console.log("Please enter a day")
// }



// var num1 = 5 
// var num2 = 5

// if (num1 === num2) {
//     console.log("These two numbers are equal!")
// } else {
//     console.log("These are different numbers.")
// }
    
    
// var num1 = 18
// var num2 = 5

// if (num1 > num2) {
//     console.log("The greater number of " + num1 + " and " + num2 + " is " + num1)
// } else if (num2 > num1) {
//     console.log("The greater number of " + num2 + " and " + num1 + " is " + num2)
// } else if (num1 === num2) {
//     console.log("The numbers are equal!")
// } else {
//     console.log("Please enter a number.")
// }


// var es = "Hola Mundo"
// var de = "Hallo Welt"
// var en = "Hello World"

// var language = "es" 

// if (language === es) {
//     console.log(es)
// } else if (language === de) {
//     console.log(de)
// } else {
//     console.log(en)
// }

// var numGrade = 80
// if (numGrade >= 90 && numGrade<= 100) {
//     console.log("A")
// } else if (numGrade >=80 && numGrade<= 89) {
//     console.log("B")
// } else if (numGrade >=70 && numGrade<= 79) {
//     console.log("C")
// } else if (numGrade >=60 && numGrade<= 69) {
//     console.log("D")
// } else {
//     console.log("F")
// }



// var num = 1
// var animal = "giraffe"

// if (num > 1) {
//     console.log(num + " " + animal + "s")
// } else {
//     console.log(num + " " + animal + " exists")
// }

// var num = 8

// if (num % 2 === 0) {
//     console.log("This number is even!")
// } else {
//     console.log("This number is odd!")
// }

// var num = 29

// if (num < 0) {
//     console.log("This is a negative number!")
// } else if (num > 0) {
//     console.log("This is a positive number!")
// } else {
//     console.log("This number is equal to 0!")
// }

// function thirdPower(num) {
//     return Math.pow(num, 3)
// }

// console.log(thirdPower(3))

// function largest(num1, num2) {
//     if (num1 === num2) {
//         return num2
//     }
//     return Math.max(num1, num2)
// }

// console.log(largest(37, 12))

// function dogAge(age) {
//     return age * 7
// }

// console.log(dogAge(3))


// function calcCircumference(radius) {
//     return (Math.PI * Math.PI) * radius
// }

// console.log(calcCircumference(5))

// function calcArea(radius) {
//     return Math.PI * (radius * radius)
// }

// console.log(calcArea(5))

// function circleProps(radius) {
//     return calcCircumference && calcArea
// }

// console.log("The circumference is " + calcCircumference(5) + " The area is " + calcArea(5))

// function celciusToFahrenheit(temp) {
//     return (temp * 9/5) + 32
// }

// // console.log(celciusToFahrenheit(14))

// function fahrenheitToCelcius(temp) {
//     return (temp - 32) * 5/9
// }

// // console.log(fahrenheitToCelcius(89))

// function convertTemperature(temp, string) {
//     if (string === "F") {
//         return celciusToFahrenheit(temp)
//     }else if (string === "C") {
//         return fahrenheitToCelcius(temp)
//     }
// }
// console.log(convertTemperature(88, "C"))


// ----------------------------------------------------
function square(num) {
    return num * num
}
//console.log(square(9))

function half(num) {
    return num / 2
}
//console.log(half(9))

function percentOf(num1, num2) {
    return num1 / num2 
}
// console.log(percentOf(2, 4))

function areaOfCircle(radius) {
    return (Math.PI * (radius * radius)).toFixed(2)
}

console.log(Math.round(areaOfCircle(8)))


function doStuff(num) {
    var sq = square(num) 
    var split = half(sq)
    var round = areaOfCircle(split)
    var pct = percentOf(sq, round).toFixed(2)
    return pct
}

console.log(doStuff(4))