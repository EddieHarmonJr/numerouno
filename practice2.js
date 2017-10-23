// var original = [1, 2, 3];
// var plusTen = []

// original.map(function(num) {
//     num += 10
//     plusTen.push(num)
//     return plusTen
// })

// console.log(plusTen)


// var original = [1, 2, 'buckle', 'my', 'shoe'];
// var stringArray = [];

// original.map(function (elem) {
//     if (typeof elem !== 'string') {
//         elem = ""
//         stringArray.push(elem)
//     } else {
//       stringArray.push(elem)
//     }
    
// })

// console.log(stringArray)

// var original = [1, 2, 3, 4, 5, 6];

// var evens = original.filter(function(num){
//     if (num % 2 === 0) {
//         return true;
//     }
//     return false;
// });

// console.log(evens)


// var original = [true, false, [], '', 0, NaN, 'kittens', 500];
// var truthys = original.filter(function(element){
//     if (element) {
//         return true;
//     }
//     return false
// })

// console.log(truthys)


// var arr = [1, 2, 6, 7, 100];

// var sumOfArr = arr.reduce((num, total) => {
//     return total + num;
// }, 0);

// console.log(sumOfArr)


// var arr = [1, 2, 'popsicle', 6, 7, 'axe body spray', 100];

// var numbersOnly = arr.filter(function(element){
//     if (typeof element === 'number') {
//         return true
//     }
//     return false
// })
// .reduce((num, total) => {
//     return sumOfArr = total + num;  
// }, 0)

// console.log(sumOfArr)

// var arr = [1, 2, 6, 7, 100];

// var sumOfArr = arr.map(function(element) {
//     if (element) {
//         return element * 2
//     }
// }).reduce((num, total)=> {
//     return sumOfArr = total + num;
// }, 0);
// console.log(sumOfArr);


// var arr = [1, 2, 500, 6, 3, 26];

// var largestNumber = arr.reduce(function(acc, curr) {
//     if (acc > curr) {
//         return acc;
//     } else {
//         return curr;
//     }
// });

// console.log(largestNumber)


// function elementDivisibleBy(divisor, arr) {
//     var divisibleElements = arr.filter(function(num) {
//         if (num % divisor === 0) {
//             return true
//         }
//         return false
//     })
//     return divisibleElements
// }

// console.log(elementDivisibleBy(2, [1, 2, 3, 4]))



// function joinByReduce(str, arr) {
//     var x = arr.reduce((element, total) => {
//         return element + total + str;
//     }, 0)
//     return x
// }

// console.log(joinByReduce('-', [2, 4, 'sportsball', 'sewing machine'] ))




// function countZeroes(array) {
//     var zeroes = array.reduce((num, total) => {
//         if (num === 0) {
//             total += 1
//         }
//     }, 0);
//     return zeroes
// }
// countZeroes([1, 2, 0, 12, 0, 3, 0])