// Loop through Each letter of your name:

// var txt = "Eddie Harmon";
// for (var i = 0; i < txt.length; i++) {
//     console.log(txt[i]);
// }


// Print out a number stating the size of the string as your name:

//console.log(txt.length)



// Write a function that prints your full name
// var firstName = "Eddie"
// var lastName = "Harmon"

// function fullName(firstName, lastName) {
//     return firstName + " " + lastName
// }

// console.log(fullName(firstName, lastName))



// var str = ""
// var num = 5
// for (var i = 1; i <= num; i++) {
//     if (i === num) {
//         str += i}
//         else {
//         str += i + ", "
//         }
//     console.log(str)
// }

// console.log(str + i)
// console.log("something else")

// var str = ""
// var num = 5
// for (var i = 1; i <= num; i++) {
//     if (i === num) {
//         str += i}
//         else {
//         str += i + ", "
//         }
//     console.log(i + " " + str)
// }

// 

// var list;
// var num = 7

// function joinList(n) {
//     str = ''
//     for (var j = n; j > 0; j--) {
//         if (j < n) {
//             str += ', '
//         }
//         str += j;
//     }   
//     return str; 
// }

// for (var i = 1; i <= num; i += 3) {
//     list = joinList(i);
//     console.log(i + ' ' + list + ", " + "BLAST OFF");
// }


// var string = "My favorite number is: "
// var num = 42
// var sentence = string + num

// console.log(sentence.toUpperCase())

// var name = "peter"
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())

// function capitalize(name) {
//     name = name.toLowerCase()
//     return name[0].toUpperCase() + name.substring(1)
// }
// console.log(capitalize("rAnDy"))


// function drEvil(amount) {
//     if (amount === 1000000) {
//         return amount + " dollars" + " (pinky)"
//     } else {
//         return amount + " dollars"
//     }
// }

//     console.log(drEvil(100000))



//Create a function called verbing. It should take a single argument, a string. 
// If its length is at least 3, it should add 'ing' to its end, unless it already 
// ends in 'ing', in which case it should add 'ly' instead. If the string length 
// is less than 3, it should leave it unchanged.



// function verbing(string) {
//     if (string.length >= 3 && string.substring(string.length - 3) === "ing") {
//         return string + "ly"
//     }else if (string.length >= 3) {
//         return string + "ing"        
//     } else {
//         return string
//     }
// }

// console.log(verbing("swim"))




// Create a function getInitString that takes a string 
// as input and return a copy of the string without the last letter.

// function getInitString(string) {
//     return string.substring(0, string.length - 1)
// }

// console.log(getInitString("beach"))



// Create a function getLast that takes a string as input, 
// and returns the last letter of that string.


// function getLast(string) {
//     return string.slice(-1)
// }

// console.log(getLast("jimmy"))



// Create a function capitalLast that takes a string as input, 
// and returns a copy of the string with the last letter capitalized.


// function capitalLast(string){
//     var firstPart = string.substring(0,string.length - 1)
//     var lastLetter = string[string.length - 1]
//     return firstPart.toLowerCase() + lastLetter.toUpperCase()
// }

// console.log(capitalLast("hello"))



// Create a function called mixUp. 
// It should take two strings as input, 
// and return the concatenation of the two strings 
// (separated by a space), swapping the first 2 characters 
// of each. You can assume that the strings are at least 
// 2 characters long.



// function mixUp(str1, str2) {
//     var str1SecondLetter = str1[1];
//     var str2SecondLetter = str2[1];
//     str1 = str1.slice(0, 1) + str2SecondLetter + str1.slice(2);
//     str2 = str2.slice(0, 1) + str1SecondLetter + str2.slice(2);
//     return str1 + ' ' + str2;
// }

// console.log(mixUp("dog" , "dinner"));

// BULLET PROOF NAME CASING

// var fullName = 'bobby flay'

// function nameCase(name) {
//     var theRest = name.toLowerCase();
//     var space = theRest.indexOf(" ");
//     var result = "";
//     while (space !== -1) {
//         var part1 = theRest.slice(0, space + 1); //Barack
//         theRest = theRest.slice(space + 1);
//         result += part1[0].toUpperCase() + part1.slice(1);
//         space = theRest.indexOf(" ");
//     }
//     result += theRest[0].toUpperCase() + theRest.slice(1);
//     return result;
// }
// ------------------------------------------
//     return n[0].toUpperCase() // B
//     + n.slice(1, space + 1) // obby
//     + n[space + 1].toUpperCase() // F
//     + n.slice(space + 2); // lay
// } else {
//     return n[0].toUpperCase()
//         + n.slice(1)
//     }
// }
// ------------------------------------------
// console.log(nameCase("bobby flay"));
// Bobby Flay

// console.log(nameCase("GORDON RAMSEY"));
// Gordon Ramsey

// console.log(nameCase("DRE"));
// Dre

// console.log(nameCase("barack hussein obama"));
// Barack Hussein Obama

// Write a function `XO` to check to see if a string 
// has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any characater.


// function XO(string) {
//     var xCount = 0;
//     var oCount = 0;
//     for (var i = 0; i <= string.length; i++) {
//         if (string[i] === "x" || string[i] === "X") {
//             xCount += 1
//             console.log('x:',xCount)
//         } else if (string[i] === "o" || string[i] === "O") {
//             oCount += 1
//             console.log('o:', oCount)
//         }
//     }
//     if (xCount === oCount) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(XO("xxxoo"))


// function countVowels(string) {
//     var vowels = "aeiouAEIOU"
//     var vowelCount = 0;
//     for (var i = 0; i <= string.length; i++) {
//         if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u" || string[i] === "A" || string[i] === "E" || string[i] === "I" || string[i] === "O" || string[i] === "U") {
//             vowelCount +=1
//             //console.log("vowels:" , vowelCount)
//         }
//     }
//     return vowelCount
// }

// console.log(countVowels("hello"))

// Write a function `isPalindrome` that receives a string 
// and returns true if the string is a palindrome and 
//false if it is not a palindrome. 
//isPalindrome("racecar") // returns true 
//isPalindrome("tattarrattat") // returns true 
//isPalindrome("dog") // returns false


// function isPalindrome(string) {
//    var lowerCase = /[\W_]/g;
//    var eraseSpace = string.toLowerCase().replace(lowerCase, '');
//    var reversedString = eraseSpace.split('').reverse().join('');
//    if (string === reversedString) {
//        return true
//    }else {
//        return false
//    }
// }

// console.log(isPalindrome("racecar"))

// a palindrome can also be solved without a regular expression
// like this:

function isPalindrome(word) {
    for (var i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
}

// Write your own mySubString function that takes three arguments, 
// a string and two numbers: a start index and an end index. 
// The substring should include all characters from the 
// start index and up to (but not including) the end index. 
// If either argument is greater than the string's length, 
// treat it as if it were equal to the string's length. 
// if the end index is omitted, also treat it as if it were equal 
// to the string's length.

// function mySubString(string, num1, num2) {
//     return string.substring(num1, num2)
// }

// console.log(mySubString("giraffe", 0, 2))



// Write a function `myIncludes` that receives a string and a letter 
// and returns true if the letter is found in the string and false otherwise. 


// function myIncludes(string, letter) {
//     if (string.includes(letter.toUpperCase()) || string.includes(letter.toLowerCase())) {
//         return true
//     }else {
//         return false
//     }
// }

// console.log(myIncludes("mississippi" , "m"))


// Write a function that takes a number (num) 
// as an argument and logs a triangle - using hashtags, 
// with height and base equal to the value of num. 
// For example, if the value of num is 5, 
// the triangle will look like this:

// #
// ##
// ###
// ####
// #####

// function triangle(num) {
//     return (num * "#")
// }

// console.log(triangle(5))