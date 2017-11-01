var body = document.querySelector("body");

document.addEventListener("click", function(event) {
    event.preventDefault();
    
    
    if (event.clientX > (window.innerWidth / 2)) {
        body.style.backgroundColor = "peachpuff";
    } else {
        body.style.backgroundColor = "aquamarine";
    }
    
});



// window.onload = function() {
//     var half = window.innerHeight / 2;
//     var bottom = window.innerWidth / 2;
//     var element = document.querySelector('body')
    

//     window.onclick = function(event) {
//         var event = window.event || event;
//         document.querySelector('body').innerHTML = "Mouse position: (" + event.clientX + "," + event.clientY + ")";
//     }
//     if (event.clientY < bottom) {
//         element.style.backgroundColor = "mediumaquamarine";
//     } else {
//         element.style.backgroundColor = "peachpuff";
        
//     }
// }
// var page = document.querySelector('body')
// page.addEventListener('click', function(event) {
//     if  () {

//     } else {

//     }
// })