// // importing the readline module
// var readline = require('readline')

// // We will be able to use `rl`
// // Only After creating the readline interface

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// //Clears the terminal screen
// function clear () {
//   process.stdout.write('\u001B[2J\u001B[0;0f')
// }

// var userInput = []

// // Listening to end of line event
// rl.on('line', function(input) {
//     userInput.push(input)
//     console.log("Here is what you typed: ")
//     console.log(userInput.join('\n'))
// })






// TWO

// var readline = require('readline')

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   // Clears the terminal screen
//   function clear () {
//     process.stdout.write('\u001B[2J\u001B[0;0f')
//   }

//   var count = 0
//   var sum = 0
//     rl.on('line', function(input) {
//         clear()
//     var possibleNumber = Number(input)

//     if (!isNan(possibleNumber)) {
//         sum += possibleNumber
//     }
//     console.log(sum)
    //var num = Number(input)
   
    // var sum = a.reduce(function(a,b) {return a + b}, 0)
    // checking if input was not a number
    // if (isNaN(num)) {
    //   console.log('that is not a valid number')
    // } else {
    //     var arr = []
    //     var total = 0
    //     arr.push(num)
    //    for (var i = 0; i < arr.length; i++) {
    //        total += arr[i]
    //    }
    //     console.log('Here are the sums of what you entered: ' + sum) 
    //  }
  // )
// -----------------
// THREE

//   var readline = require('readline')
  
//   var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   function clear () {
//     process.stdout.write('\u001B[2J\u001B[0;0f')
//   }
  
//   function sumStringArr(arr){
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++){
//       var num = Number(arr[i])
      
//       if (!isNaN(num)){
//         sum += num;
//       }
//     }
//     return sum;
//   }
  
//   rl.on('line', function(input){
//       var inputArr = input.split(' ')
//       var sum = sumStringArr(inputArr)
//       console.log(sum)
//   })

//Question #1

// const readline = require('readline');

// const rl = readline.createInterface({
// input: process.stdin,
// output: process.stdout
// });
// var sum = 0
// rl.on('line', function(input){
// var UpperInput = input.toUpperCase()
// if(UpperInput.includes('INC')){
// sum++
// console.log('The sum has been incremented ' + sum)
// }else if(UpperInput.includes('DEC')){
// sum--
// console.log('The sum has been decremented ' + sum)
// }else if (UpperInput.includes('RES')){
// sum = 0
// console.log('The sum has been reset to ' + sum)
// }else {
// console.log("Please enter 'res', 'inc', or 'dec'")
// }

// })




// console.log("Please enter 'res', 'inc', or 'dec'")

// Question #2

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function add(num1, num2) {
//     return num1 + num2;
// }
// function sub(num1, num2) {
//     return num1 - num2;
// }
// function multi(num1, num2) {
//     return num1 * num2;
// }
// function divide(num1, num2) {
//     return num1 / num2;
// }
// function toNumber(element) {
//     return Number(element);
// }

// rl.on('line', function (input) {
//     var inputArr = input.split(" ");

//     //console.log(inputArr);    // VALUE OF INPUTARR
//     if (inputArr[0] === '+') {
//         console.log(add(toNumber(inputArr[1]), toNumber(inputArr[2])));
//     } else if (inputArr[0] === '-') {
//         console.log(sub(toNumber(inputArr[1]), toNumber(inputArr[2])));
//     } else if (inputArr[0] === '*') {
//         console.log(multi(toNumber(inputArr[1]), toNumber(inputArr[2])));
//     } else if (inputArr[0] === '/') {
//         console.log(divide(toNumber(inputArr[1]), toNumber(inputArr[2])));
//     } else {
//         console.log("Please enter a valid option");
//     }
//     console.log("[+ num1 num2, - num1 num2, * num1 num2, / num1 num2]");
// })

// console.log("[+ num1 num2, - num1 num2, * num1 num2, / num1 num2]");



//Question 3

var readline = require('readline');
var rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
})

function add(arr) {
    var result = arr[1]
    for (var i = 2; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}

function sub(arr) {
    var result = arr[1]
    for (var i = 2; i < arr.length; i++) {
        result -= arr[i]
    }
    return result
}

function mult(arr) {
    var result = arr[1]
    for (var i = 2; i < arr.length; i++) {
        result *= arr[i]
    }
    return result
}

function div(arr) {
    var result = arr[1]
    for (var i = 2; i < arr.length; i++) {
        result /= arr[i]
    }
    return result
}
rl.on('line', function(input) {
    var inputArr = input.split(' ')
    //console.log('Input array is: ' + inputArr)
    var opr = inputArr[0]

    if (opr !== '+' &&
        opr !== '-' &&
        opr !== '*' &&
        opr !== '/') {
            console.log('Valid expression nust be: "operator num1 num2 num3..."' +
            '\nValid operators are "+ - * /"');
    } else {
        for (var i = 1; i < inputArr.length; i++) {
            if (isNaN(inputArr[i])) {
                console.log('Valid expression nust be: "operator num1 num2 num3..."' +
                '\nValid operators are "+ - * /"');
                return;
            } else {
                inputArr[i] = Number(inputArr[i])
            }

        }
        if (opr === '+') {
            console.log(add(inputArr))
        } else if (opr === '-') {
            console.log(sub(inputArr))
        } else if (opr === '*') {
            console.log(mult(inputArr))
        } else if (opr === '/') {
            console.log(div(inputArr))
        }
    }
})

// test comment
