// function decimalToBinary(decimal) {
//   return Number(decimal).toString(2)
// }

// console.log(decimalToBinary(5))


// function binaryToDecimal(){

// }

// console.log(binaryToDecimal("101"))

function binaryToDecimal(string) {
    var on = 0
    var off = 0
    var n = 0
    for (var i = string.length - 1; i >= 0; i--) {
        if (string[i] === '1'){
            on += 1 * Math.pow(2, n++)
        }else if (string[i] === '0'){
            off += 0 * Math.pow(2, n++)
        }
    }
    var sum = on + off
    return sum
}

console.log(binaryToDecimal("101"))