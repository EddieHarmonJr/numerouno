var readline = require('readline')
const fs = require('fs');

var options = 'list, show n, reserve n, occupancy n max, search amenity, save'

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var rooms;


fs.readFile('rooms.json', function(err, file) {  
    if (err) throw err;
    rooms = JSON.parse(file);
});

function save() {
    fs.writeFileSync('rooms.json', JSON.stringify(rooms), function(err) {
        if (err) throw err;
    });
    console.log("Saved.")
}

// make the string exactly as long as len
function padTo(str, len) {
    if (str.length > len) {
        return str.slice(0, len - 3) + '...'
    } else {
        while (str.length < len) {
            str += ' '
        }
        return str;
    }
}

// make the string exactly as long as len
function padLeft(str, len) {
    var money = str
    if (money.length > len) {
        return money.slice(0, len - 3) + '...'
    } else {
        while (money.length < len) {
            money = ' ' + money
        }
        return money;
    }
}

function toMoney(num) {
    return '$' + num.toString()
}

function whatsAvailable() {
    console.log(
        padLeft('ID', 2),
        '...',
        padTo('Address', 30), 
        ' ', 
        padLeft('Price', 8)
    );
    for (var i = 0; i < rooms.length; i++) {
        if (rooms[i].reserved) {
            continue;
        }
        var counter = i + 1;
        console.log(
            padLeft(counter.toString(), 2),
            '...',
            padTo(rooms[i].location, 30), 
            ' ', 
            padLeft(toMoney(rooms[i].price), 8)
        );
    }
}

function bulletPoints(list) {
    return '\n - ' + list.join('\n - ')
}

function showDetails(n) {
    var room = rooms[n]
    console.log('Details of room #' + (n + 1))
    console.log('----------------------\n')
    if (room.reserved) {
        console.log('[RESERVED]')
    }
    console.log('Location:', room.location)
    console.log('Price:', toMoney(room.price))
    console.log('Max. Occupancy:', room.maxOccupants)
    console.log('Amenities:', bulletPoints(room.amenities))
}

function reserve(n) {
    if (rooms[n].reserved) {
        console.log('Sorry, it\'s already reserved.')
        return
    } 
    rooms[n].reserved = true
    console.log('Thank you for reserving')
}

function occupancy(n, max) {
    rooms[n].maxOccupants = max
    console.log('Occupants set.')
}

function amenitySearch(n, amenity) {
    //console.log("first arg" + n + "\n 2nd arg" + amenity)
    rooms[n].amenities.includes(amenity)
    return rooms[n]   
}


rl.on('line', function(input) {
    var inputArr = input.split(' ')
    if (inputArr[0] === 'list') {
        whatsAvailable();        
    } else if (inputArr[0] === 'show') {
        showDetails(inputArr[1] - 1)
    } else if (inputArr[0] === 'reserve') {
        reserve(inputArr[1] - 1)
    } else if (inputArr[0] === 'occupancy') {
        occupancy(inputArr[1] - 1, inputArr[2])
    } else if (inputArr[0] === 'search') {
        amenitySearch(inputArr[0], amenity )
    } else if (inputArr[0] === 'save'){
        save()
    } else if (inputArr[0] === 'quit'){
        save()
        process.exit
    } else
     {
        console.log('Unknown command: ' + input)
    }

    console.log('\n\nPlease chose one of [' + options + '] $')
})

console.log('Please chose one of [' + options + '] $')


// add occupancy n option | occupancy n
// create a function that makes the update
// add if statement that checks for input
// when condition is met, it updates occupancy for that
// specific location (show n)
// console.log msg stating the maxOccupancy has been updated

// function update(number) {
//     newOccupancyNumber = rooms[i].maxOccupants = number
//     return newOccupancyNumber
// }

// else if (inputArr[0] === 'occupancy') {
//     update(inputArr[1] - 1)
//     console.log('The maxOccupancy has been updated to ' + newOccupancyNumber)
// }

//new comment