// The foundation of loops
// While loop

// var num = 1
// while (num <= 10) {
//     console.log("the number is: " + num)
//     num += 1
// }

// // For loop

// for (var num = 1; num <= 10; num += 1) {
//     console.log("the number is: " + num)  
// }

// // Conditional loop

// for (var i = 0; i <= 10; i += 1){
//     if (i % 2 === 0){
//       console.log(i + ' is even')
//     } else {
//       console.log(i + ' is odd')
//     }
//   }


//   // Calculate the sum of all numbers between 1-10
//   var sum = 0
//   for (var i = 1; i <= 10; i += 1){
//     sum += i
//     console.log(sum)
//   }

//   function descending(num) {
//       for (var i = 10; i >= 0; i -= 1) {
//           console.log(i)
//       }
//   }
//   descending(10)

//   function nine(num) {
//       while 
//     console.log(9 * num)
//   }

// nine(5)


// function nine(num) {
//     var i = 1
//     while (i <= num) {
//         console.log(9 * i)
//         i += 1
//     }
// }
// nine(5)


// function assignGrade(score) {
//     if (score > 90) {
//         return 'A'
//     } else if (score > 80) {
//         return 'B'
//     } else if (score > 70) {
//         return 'C'
//     } else if (score > 65) {
//         return 'D'
//     } else {
//         return 'F'
//     }
// }

// function fizzOrBuzz() {
//     var i = 1
//     while (i <= 100){
//         if (i % 3 === 0) {
//         console.log("Fizz")
// }else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
//     i += 1
// }

//fizzOrBuzz()

// function fizzOrBuzz() {
//     var i = 1
//     while (i <= 100){
//         if (i % 3 === 0) {
//             console.log("Fizz")
//     }else if (i % 5 === 0) {
//             console.log("Buzz")
//         } else {
//             console.log(i)
//         }
//             i += 1
//             }}

//             fizzOrBuzz()

// function fizzOrBuzz() {
//     var i = 1
//     while (i <= 100){
//      if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//      } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
//         i += 1
//         }
//     }

//     console.log(fizzOrBuzz())

// function bottles(){
    
//         for (var i = 99; i >= 1; i -= 1) {
    
//             if (i === 1) {
//                 console.log(i + " bottle of beer on the wall, \n "  + i + " bottle of beer.\n Take one down, pass it around,\n", "no more bottle of beer on the wall.")
//                 }else {
//                     console.log( i + " bottles of beer on the wall, \n "  + i + " bottles of beer.\n Take one down, pass it around,\n" + i + " bottles of beer on the wall.")   
//                 }
    
//             }
//     }
    
//     bottles()

// # # #
//  # # #
// # # #
//  # # #
// # # #
//  # # #

// function makeBoard(num) {
//     var board = '';
//     for (var row = 0; row < num; row++) {
//         for (var column = 0; column < num; column++) {
//             if ((column + row) % 2 === 0) {
//                 board += '#';
//             } else {
//                 board += ' ';
//             }
//         }
//         board += '\n';
//     }
//     return board;
// }

// console.log(makeBoard(8));