// window.innerHeight
// window.innerWidth



window.onload = function() {
    var half = window.innerHeight / 2;
    var bottom = window.innerWidth / 2;
    var element = document.querySelector('body')
    

    window.onclick = function(event) {
        var event = window.event || event;
        document.querySelector('body').innerHTML = "Mouse position: (" + event.clientX + "," + event.clientY + ")";
    }
    if (event.clientX < half) {
        element.style.backgroundColor = "mediumaquamarine";
    } else if (event.clientX > half) {
        element.style.backgroundColor = "peachpuff";
        
    }
}
// var page = document.querySelector('body')
// page.addEventListener('click', function(event) {
//     if  () {

//     } else {

//     }
// })