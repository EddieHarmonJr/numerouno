// AirBnb


// var rooms = [

// {
//     price: 200,
//     location: '11 Broadway, NY',
//     maxOccupants: 3,
//     amenities: ['washer/dryer', 'wifi', 'cable']
// },
// {
//     price: 100,
//     location: '11 Delancey, NY',
//     maxOccupants: 1,
//     amenities: []
// },
// {
//     price: 2000,
//     location: '1 Park Pl, NY',
//     maxOccupants: 2,
//     amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
// }
// ];

// // make the string exactly as long as len
// function padTo(str, len) {
// if (str.length > len) {
//     return str.slice(0, len - 3) + '...'
// } else {
//     while (str.length < len) {
//         str += ' '
//     }
//     return str;
// }
// }

// // make the string exactly as long as len
// function padLeft(str, len) {
// var money = str
// if (money.length > len) {
//     return money.slice(0, len - 3) + '...'
// } else {
//     while (money.length < len) {
//         money = ' ' + money
//     }
//     return money;
// }
// }

// function toMoney(num) {
// return '$' + num.toString()
// }

// function whatsAvailable(rooms) {
// for (var i = 0; i < rooms.length; i++) {
//     if (rooms[i].reserved) {
//         continue;
//     }
//     console.log(
//         padTo(rooms[i].location, 20), 
//         ' ', 
//         padLeft(toMoney(rooms[i].price), 8)
//     );
// }
// }

// function bulletPoints(list) {
// return '\n - ' + list.join('\n - ')
// }

// function showDetails(room) {
// console.log('Location:', room.location)
// console.log('Price:', toMoney(room.price))
// console.log('Max. Occupancy:', room.maxOccupants)
// console.log('Amenities:', bulletPoints(room.amenities))
// }

// function reserve(which) {
// rooms[which].reserved = true
// console.log('Thank you for reserving')
// }

// whatsAvailable(rooms);

// console.log('----------')

// var selected = 2;
// showDetails(rooms[selected]);

// console.log('----------')

// reserve(selected);

// console.log('----------')

// whatsAvailable(rooms);

// --------------------------------------------

// Create an object to hold information on your favorite recipe. It should have the following properties: title, number of servings, and ingredients (an array). Create a function that logs the recipe information, so it looks like this:
// name: Mole
// servings: 2
// ingredients: cinnamon,cumin,cocoa


// var recipes = 
//     {
//         title: "Mole",
//         numberOfServings: 2,
//         ingredients: ["cinnamon", "cumin", "cocoa"]
//     }

// function getRecipe() {
//     console.log("name:", recipes.title)
//     console.log("servings:", recipes.numberOfServings)
//     console.log("ingredients: ")

//     // for (var i = recipes.ingredients.length; i <= recipes.ingredients.length; i++) {
//     //     console.log("ingredients: " + recipes.ingredients.join(",")) //(Part 1 of Question 1, just remove the last console.log for ingredients)

//      for (var i = 0; i < recipes.ingredients.length; i++) {
//         console.log(recipes.ingredients[i]) 

//      }
// }

// getRecipe()





// Create a function prettyLog that logs a recipe information. A recipe is an object to that has the following properties: title, number of servings, and ingredients (an array). The output should look like this: (make sure there 
    
//     name: Mole
//     servings: 2
//     ingredients: cinnamon > cumin > cocoa

// var recipes = 
//     {
//         title: "Mole",
//         numberOfServings: 2,
//         ingredients: ["cinnamon", "cumin", "cocoa"]
//     }

// function prettyLog() {
//     console.log("name:", recipes.title)
//     console.log("servings:", recipes.numberOfServings)
//     //console.log("ingredients: ")

//     for (var i = recipes.ingredients.length; i <= recipes.ingredients.length; i++) {
//         console.log("ingredients: " + recipes.ingredients.join(" > "))
//     }

// }

// prettyLog()






// Write a function getProps that takes an object as an argument
// and returns all the keys of that object in an array


// var league = {
//     sport: "basketball",
//     team: "Cleveland Cavaliers", 
//     player: "Lebron James"
// }

// function getProps(league) {
//     var array = []
//     for (var key in league) {
//         array.push(key)
//     }
//     return array

// }

// console.log(getProps(league))



// function getObjLength(league) {
//     var array = []
//     for (var key in league) {
//         array.push(key)
//     }
//     console.log(array.length)
// }

// getObjLength(league)

// var films = [
//     {
//         title: "The Matrix",
//         director: "Wachowski Brothers",
//         watched: true
//     },
//     {
//         title: "Shawshank Redemption",
//         director: "John Doe",
//         watched: false
//     }
// ]

// function movieInfo(film) {
//     for (var i = 0; i < films.length; i++) {
//         if(films[i].watched === true) {
//             console.log("You already watched " + '"' + films[i].title + '"' + " directed by " + films[i].director)
//         } else if (films[i].watched === false) {
//         console.log("You still need to watch " + '"' + films[i].title + '"'  + " by " + films[i].director)
//         } else {
//             console.log(films[i].title + " directed by " + films[i].director)
            
//         }
//     }
// } 

// movieInfo(films)




var todos = []

var todo = {
    description: "Mop floor",
    completed: true
}


function thingsTodo(thing) {
    todos.push(thing)
}

function displayTodoList() {
    for (var key in todos )
    console.log(todo)
}

// function completed() {
//     if (todo.completed === todos[]) {

//     }


thingsTodo(todo)
displayTodoList()