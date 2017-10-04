// var arr = [2, 3, 5, 7, 11]
// var arr2 = ["a", "b", "c"]
// var arr3 = ["a", 1, "b", 2, "c", 3]

// arr3.push("BOO!") adds to the last index
// arr3.pop() removes the last index

// console.log(arr3.join(" "))


// for (var index = 0; index < arr3.length; index ++) {
//     var element = arr3[index];
//     console.log(element)
// }



// Write a function named `arrLength` that takes in an array as an argument. 
// The function should return the length of that array. 

// function arrLength(array) {
//     return array.length
// }

// console.log(arrLength([5, 6, 7]))


// Write a function named `longestArr` that takes in two arrays as arguments.
// The function should compare the length of the two arrays and return 
// whichever array is longer (aka whichever array has more values in it). 
// If the lengths of the two arrays are equal, then return null.



// function longestArr(arr1, arr2) {
//     if (arr1.length > arr2.length) {
//         return arr1
//     } else if (arr2.length > arr1.length) {
//         return arr2
//     } else {
//         return null
//     }
// }

// console.log(longestArr([1, 2, 3], ["x", "y", "z"]))

// Write a function `middleElement` that takes an array 
// as an argument and returns the middle element of that array. 
// If the array has an even number of elements, 
// the function should return "Oops, there's no middle..."

// function middleElement(arr) {
//     if (arr.length % 2 === 0) {
//         return "Oops, there's no middle..."
//     } else {
//         var middle = Math.floor(arr.length / 2)
//         return arr[middle]
//     }
// }

// console.log(middleElement([5, 4, 3, 2]))


// Write a function `sumArray` that takes as argument 
// an array of numbers and returns the sum of all these numbers.


// function sumArray(arr) {
//     var sum = 0
//     for (var i = 0; i < arr.length; i ++) {
//         sum += arr[i]  
//     }
//     return sum
// }

// console.log(sumArray([1, 2, 3, 4]))




// Write a function range that takes two numbers as arguments: min and max. 
// The function will return and array with all the numbers, inclusive, between min and max.

// function range(min, max) {
//     var array = []
//     for (var index = min; index <= max; index ++) {
//         array.push(index)
// }
// return array
// }

// console.log(range(3, 7))


// Write a function rangeWithStep that takes three numbers as arguments: min, max and step. 
// The function will return and array with all the numbers, inclusive, between min and max,
//  going up in increments equal to step. If no step value is provided, the increment will be 1.

// function rangeWithStep(min, max, step) {

// }

//     for (var index = min; index <= max; index ++) {







// Write a function named `doubleTrouble` that takes in an array of numbers as an argument. 
// The function should return a new array that doubles every number from the original array. 


// function doubleTrouble(array) {
//     var doubled = []
//     for (var i = 0; i < array.length; i++) {
//         doubled.push(array[i] * 2)
// }
//     return doubled
// }

// console.log(doubleTrouble([5, 10, 15, 20]))


// Unsure what this does
// function deepEquals(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     for (var i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false
//         }       
//     }
//     return true
// }

// console.log(deepEquals([1, 2, 3, 4], [1, 2, 3, 4]))



// function arrayInsert(a1, a2, where) {
//     for (var i = 0; i < a2.length; i++) {
//         a1.splice(where + i, 0, a2[i])
//     }
// }



// Write a function named `addTwoElements` that takes in three arguments: 
// an array, and two values to add to that array. The function should 
// add those two values to the end of the array.


// function addTwoElements(array, value1, value2) {
//     array.push(value1, value2)
//     return array
// }

// console.log(addTwoElements([2, 4, 6], 8, 10))


// function withoutLastTwo(array) {
//     array.pop()
//     array.pop()
//     return array
// }

// console.log(withoutLastTwo(["one", "two", "three"]))



// Write a function `everyThird` that takes an array as an argument 
// and returns a new array that contains every third element of the original array.

// function everyThird(array) {
//     var newArray = []
//     for (var i = 2; i < array.length; i += 3) {
//         newArray.push(array[i])
//     }
//     return newArray    
// }

// console.log(everyThird([1, 2, 3, 4, 5, 6, 7, 8, 9]))





// Write a function that takes an array as an argument, 
// and returns a copy of the array with the last element at the front. 

// function lastThingsFirst(array) {
//     array.unshift(array.pop())
//     return array
// }

// console.log(lastThingsFirst(["A", "B", "C", "D"]))
 