let choice = window.prompt("Please choose a quadrant: #topLeft, #topRight, #bottomLeft, or #bottomRight :")

let color = window.prompt("Please type a color :") 


function colorQuads() {
    let quadrant = '#' + choice
    let chosenColor = color 
    let element = document.querySelector(quadrant)

    element.style.backgroundColor = chosenColor
}

colorQuads()
// function colorQuads() {
//     let quadrant = '#' + prompt(`Select quadrant`)
//     let color = prompt("Now Choose any color you'll like")
//     let element = document.querySelector(quadrant)
    
//     if (!element){
//         window.alert("no element found")
//     } else {
//         element.style.backgroundColor = color        
//     }

//     setTimeout(function(){
//         let option = prompt("Would you like to add another color?")
//         if (option.toLowerCase() === "yes") {
//             colorQuads()
//         } 
//     }, 1000)
// }

// colorQuads()






// function colorQuads() {
//     let quadrant = "#" + prompt(`Select which quandrant you will like to add color to
// topleft
// topright
// bottomleft
// bottomright`)


//     let color = prompt("Now choose a color")

//     let id = document.querySelector(quadrant)

//     id.style.backgroundColor = color

//     let option = prompt("Would you like to add another color to a quadrant? Yes Or No")

//     if (option.toLowerCase() === "yes") {
//         colorQuads()
//     } 

// }

// colorQuads()
