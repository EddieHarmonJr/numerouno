// function quadraticTime(characterNames) {
//     for (var i = 0; i < characterNames.length; i++) {
//         for (var j = 0; j < characterNames.length; j++ ) {
//                 console.log("Player One: " + characterNames[i] + "; Player Two: " + characterNames[j])
//         }
//     }
// }


// quadraticTime(["Agnes", "Bart", "Carl"])

// What's happening is a nested for loop. The innermost loop will fully iterate first before the other loop iterates once. Then it will do the same thing again.

function logBoard(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            console.log(board[i][j])
        }
        // console.log(board[1])
        // console.log(board[2])
        
    }
}

var board = [ ["x", "o", "o"],
              ["o", "x", "o"],
              ["x", "o", "x"] ]


console.log(logBoard(board))