// function add1(num){
//     return num + 1;
// }

// function sub1(num){
//     return num - 1;
// }

// function add2(num){
//   return add1(add1(num))
// }

// function add3(num){

// }

// function add4(num){
     
// }

// function add5(num){

// }

// function add8(num){

// }

// function addNumber(num1, num2){
    
// }

// function double(number) {
//     return number * 2
// }

// function square(number) {
//     return number * number
// }

// function doubleSquare(number) {
//     return double(number) * square(number)
// }

// console.log(double(2))
// console.log(square(9))
// console.log(doubleSquare(4))



// function classyGreeting(firstName, lastName) {
//     return "Hello " + firstName + " " + lastName + "."
// }

// console.log(classyGreeting("Steph", "Curry"))


// function yell(string) {
//     return string.toUpperCase()
// }

// console.log(yell("tiramsu"))


// function yellGreeting(firstName, lastName) {
//     return yell(classyGreeting(firstName, lastName))
// }

// console.log(yellGreeting("John", "Doe"))


// var arr1 = [1, 2, 3];
// var arr2 = [2, 3, 4];

// function removeDupes(arr) {
//     // returns array without duplicates
//     var newArray = []
//     for (var i = 0; i < arr.length; i++ ) {
//         if (!newArray.includes(arr[i])) {
//             newArray.push(arr[i])
//         }
//     }
//     return newArray
// }

// //console.log(removeDupes([1,1,2,1,2,3,3]))


// function concatAndRemoveDupes(arr1, arr2) {
//    return removeDupes(arr1.concat(arr2))

// }

// console.log(concatAndRemoveDupes(arr1, arr2))


//------------------------------------------------
// var grades = [91, 85, 100, 92, 88]

// function sort(grades) {
//     var sum = 0 
//    for (var i = 0; i < grades.length; i ++) {
//        sum += parseFloat(grades[i])
//    }
//    var avg = sum / i
//    return Math.floor(avg)
// }

// console.log(sort(grades))

// function middleElement() {

// }

// function median() {

// }
//-------------------------------------------------

function forEachElem(array, callback){
    for (var i = 0; i < array.length; i++) {
    callback(array[i])
    }
}

    function logEachElem(array){
    console.log(array)
    }
    
    forEachElem([1,2,3,4,5],logEachElem)


// function forEachElem(arr, callback){
//     for (var i = 0; i < arr.length; i++) {
//        callback(arr[i])
//     }
//  }

// function logArrTypes(arr) {
//     console.log(arr + ' is a ' + typeof(arr))
// }
// forEachElem([1,'cat', true], logArrTypes)