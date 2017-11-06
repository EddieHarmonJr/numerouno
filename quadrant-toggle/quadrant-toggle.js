document.addEventListener('click', function(event){
    if (event.target.style.backgroundColor === "white"  ||
        event.target.style.backgroundColor === "") {

        event.target.style.backgroundColor = "red"
    } else {
        event.target.style.backgroundColor = "white"
    }


    // switch (event.target.style.backgroundColor) {
    //     case "red":
    //     event.target.style.backgroundColor = "white";
    //     break;

    //     case "white":
    //     event.target.style.backgroundColor = "red"
    //     break;
        
    //     default:
    //     event.target.style.backgroundColor = "red"
    // }
})