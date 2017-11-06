var button = document.getElementById('button')


button.addEventListener('click', function(event) {

   var newElement = document.createElement('img')
   var newText = document.createTextNode('here')
   newElement.appendChild(newText)
   var position = document.getElementsByTagName('body')[0]
   var content = position.innerHTML
   content.innerHTML = "<img src=\"https://images.stockopedia.com/published/is-dividend-growth-investing-enthusiasm-inflating-a-bubble.jpg\" alt=\"\">"
   
//    position.appendChild(newElement)

})




// https://1.bp.blogspot.com/-9LrZaJwvZXk/WGIR2j3Rn9I/AAAAAAAATKc/Qm4tLwlnGaUsdspiBO3pY49HOERHm0wWQCLcB/s1600/bubbles.png