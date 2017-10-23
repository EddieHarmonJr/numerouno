function XO(str) {
    xCount = 0;
    oCount = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x' || str[i] === 'X') {
            xCount += 1
        } else if (str[i] === 'o' || str[i] === "O") {
            oCount += 1
        }
    }
    if (xCount === oCount) {
        return true
    } else {
        return false
    }
}

console.log(XO('XxxooO'))