// function and(x, y) {
//     if (x && y === true) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(and("happy string", []))



// function addOnlyNumbers(foo, bar) {
//     if (typeof foo === 'number' && typeof bar === 'number') {
//         return foo + bar
//     } else {
//         return NaN
//     }
// }

// console.log(addOnlyNumbers(7, "x"))


// function isAllNum(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'number') {
//             return false
//         } 
//     }
//             return true

// }

// console.log(isAllNum([1, 2, 3, 4, 5]))
// console.log(isAllNum([1, 2, "mountain dew"]))



// function forceAllNum(arr){
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number'){
//             arr[i] = 0
//         }
//     }
//     return arr
// }

// console.log(forceAllNum([1, 2,"mountain dew"]))



// function makeVowelsHyphens(s) {
//     if (typeof s !== 'string') {
//         return undefined
//     } else if (typeof s === 'string') {
//         var sIntoArray = s.split('')
//         for (var i = 0; i < sIntoArray.length; i++) {
//             if ("aeiouAEIOU". includes(sIntoArray[i])) {
//                 sIntoArray[i] = "-"
//             }
//         }
//         return sIntoArray.join('')

//     }

// }

// console.log(makeVowelsHyphens({ isString: false, isObject: true }))



// function hasPropertyTacos(loljk) {
//     if (typeof loljk !== 'object') {
//         return "i am not even an object"
//     } else if (typeof loljk === 'object'){
//     for (var key in loljk) {
//         if (key === "tacos") {
//             return true
//         }
//     }
//     }
// }

// console.log(hasPropertyTacos({ name: 'Cody', tacos: 'so many tacos' }))


// function hasPropertyGeneric(bigO, littleP) {

// }


// function convertVowelsGeneric(str, sub) {
//     if (typeof str !== 'string' || typeof sub !== 'string') {
//         return undefined
//     } else if (typeof str === 'string' && typeof sub === 'string') {
//         var strNew = str.split('')
//         for (var i = 0; i < strNew.length; i++) {
//             if ("aeiouAEIOU". includes(strNew[i])) {
//                 strNew[i] = sub
//             }
//         }
//         return strNew.join('')

//     }
// }
// console.log(convertVowelsGeneric('tuesday is my favorite day', 'r'))


// function hasPropertyGeneric(bigO,littleP){
//     if (typeof bigO !== 'object'){
//         return false 
//     }

//     for (var key in bigO){
//         if (key === littleP){
//             return true 
//         }
//     }
//  return false 
// }
// console.log(hasPropertyGeneric({ name: 'cody', tacos: 3 },'tacos'))

var spinner = '/-\\|' 
var i = 0

setInterval(function(){
    console.log('\033[H' + spinner[i])
    i = (i + 1) % spinner.length
}, 100)