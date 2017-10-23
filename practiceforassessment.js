// var num = 1
// while (num <= 100) {
//     console.log(num)
//     num += 1
// }

// 

// function odd(num) {
//     for (var i = 0; i <= num; i++) {
//         if (i % 2 !== 0) {
//             console.log(i)
//         }
//     }
// }

// odd(10)


// function multiples(num) {
//    for (var i = 1; i <= num; i++ ) {
//        console.log(i * 9)
//    }
// }

// multiples(5)



// COME BACK TO #30 (DONE*)
// function verbing(string) {
//     if (string.length < 3) {
//         return string
//     } else if ( string.length > 3 && string.endsWith('ing')) {
//         return string + 'ly'
//     } else if (string.length >= 3) {
//         return string + 'ing'
//     }
// }

// console.log(verbing('boxing'))



//COME BACK TO #31 (DONE*)
// function getInItString(string) {
//     return string.slice(0, -1)
// }

// console.log(getInItString('jimmy'))


// COME BACK TO # 33
// function getLast(string) {
//     var lastLetter = string[(string.length - 1)]
//     var capitalized = lastLetter.toUpperCase
//     return capitalized
// }
// console.log(getLast('Jimmy'))



// function XO(string) {
//     var xCount = 0;
//     var yCount = 0;

//     for (var i = 0; i < string.length; i++) {
//         if (string[i] === 'X' || string[i] === 'x') {
//             xCount += 1
//         } else if (string[i] === 'O' || string[i] === 'o') {
//             yCount += 1
//         }
//     } if (xCount === yCount) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(XO('ooxx'))



// function countVowels(string) {
//     var vowels = "aeiouAEIOU"
//     var vowelCount = 0
//     for (var i = 0; i < string.length; i++) {
//         if (vowels.includes(string[i])) {
//             vowelCount += 1
//         }
//     } return vowelCount

// }

// console.log(countVowels('cat says meow'))



// COME BACK TO #37
// function mySubString(string, num1, num2) {
//     return string.slice(num1, num2)

// }

// console.log(mySubString("hello world", 2, 6))

// function arrLength(array) {
//     return array.length
// }

// console.log(arrLength([5, 4, 3, 'x', 'y', 'jumpman']))


// function longestArr(arr1, arr2) {
//     if (arr1.length > arr2.length) {
//         return arr1
//     } else if (arr2.length > arr1.length) {
//         return arr2
//     } else {
//         return undefined
//     }
// }

// console.log(longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]))




// function addTwoElements(arr, val1, val2) {
//     arr.push(val1, val2)
//     return arr
// }

// console.log(addTwoElements(["hello", "hi"], "hey", "what up"))



// function removeLastTwo(arr) {
//     arr.pop()
//     arr.pop()
//     return arr
// }

// console.log(removeLastTwo(['dog', 'cat', 'bat', 'octopus']))

// function middleElement(arr) {
//     if (arr.length % 2 === 0) {
//         console.log("Oops, there's no middle...")
//     } else {
//         var middle = arr[Math.floor(arr.length / 2)]
//         return middle
//     }

// }

// console.log(middleElement(['dog', 'cat', 'bat', 'octopus', 'chinchilla']))

// COME BACK TO #43
// function everyThird(arr) {


// }
// console.log(everyThird(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']))

// function doubleTrouble (arr) {
//     var doubledArr = []
//     for (var i = 0; i < arr.length; i++) {
//         doubledArr.push(arr[i] * 2)
//     }
//     return doubledArr
// }

// console.log(doubleTrouble([1, 2, 3]))

// function frontToBack(arr) {
//     var lastElement = arr[arr.length - 1]
//     arr.unshift(lastElement)
//     arr.pop()
//     return arr
// }

// console.log(frontToBack([1, 2, 3, 4, 5]))

// function capitalLast(string) {
//     var lastCharacter = string.slice(-1)
//     var name = string
//     return string.slice(0, -1) + string.slice(-1).toUpperCase()

// }

// console.log(capitalLast('Lada'))


// function isPalindrome(str){
//     if (str === str.split('').reverse().join('')) {
//         return true
//     } else {
//         return false
//     }
//     }
// console.log(isPalindrome('radar'))

var recipes = {
    title: 'Mole',
    numberOfServings: 2,
    ingredients: ['cinnamon', 'cumin', 'cocoa']
}

// function prettyLog(recipe) {
//     console.log('name: ' + recipes.title)
//     console.log('servings: ' + recipes.numberOfServings)
//     console.log('ingredients: ' + recipes.ingredients)
// }
// console.log(prettyLog(recipes))


// function double(num) {
//     return num + num
//   }
  
//   function square(num) {
//     return num * num
//   }
  
//   function doubleSquare(num) {
//   return square(double(num))
//   }
//   console.log(doubleSquare(2))


// for (var i = 0; i <= 20; i++) {
    
//     if (i % 2 === 0 && i % 4 !== 0) {
    
//     console.log("fools")
    
//     } else if (i % 4 === 0) {
    
//     console.log("charlatanss")
    
//     } else {
    
//     console.log(i)
    
//     }
    
//     }

