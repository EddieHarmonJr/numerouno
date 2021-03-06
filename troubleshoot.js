var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f')
}

var tasks = []

rl.on('line', function (input) {
    var input = input
    var inputArr = input.split(' ')
    var opr = inputArr[0]
    var description = inputArr.slice(1).join(' ')
    var newTask = createTask(description, false)

    if (opr !== "add" &&
        opr !== "toggle" &&
        opr !== "show") {
        console.log("Please enter a valid request.")
    } else if (opr === "add") {
        tasks.push(newTask)
        logTasks(tasks)
    } else if (inputArr[0] === 'toggle') {
        var index = Number(inputArr[1])
        toggleCompleted(index - 1)
    } else if (opr === "show" && inputArr[1] === "all") {
        logTasks(tasks)
    } else if (opr === "show" && inputArr[1] === "active") {

    } else if (opr === "show" && inputArr[1] === "completed") {
       forEachElem(tasks, getTrue(tasks)) 
    } else {
        console.log("Wrong input")
    }

    console.log("Please choose either add, show all, show active, show completed, or toggle")
})



function createTask(title, completed) {
    var task = {
        title: title,
        completed: completed
    }
    return task
}

function logTasks(tasks) {
    for (var i = 0; i < tasks.length; i++) {
        console.log((i + 1), '' + tasks[i].title + '. Completed: ' + tasks[i].completed)
    }
}

function forEachElem(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i)
    }
}

forEachElem(tasks, function (task, i) {
    console.log(i + '. ' + task.title + '. Completed: ' + task.completed)
})


function toggleCompleted(index) {
    var input = 'toggle 0'
    var inputArr = input.split(' ')
    tasks[index].completed = !tasks[index].completed
}


console.log("Please choose either add, show all, toggle")



// var buyMilk = createTask('buy milk', false)
// tasks.push(buyMilk)

// var cleanHouse = createTask('clean the house', false)
// tasks.push(cleanHouse)

// console.log(tasks)


function getTrue(tasks) {
    // forEachElem
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].completed === true) {
            console.log(tasks[i], i)
        }
    }
    
}