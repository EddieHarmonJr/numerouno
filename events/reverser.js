let myform = document.querySelector('form');
myform.addEventListener('submit', function(event) {
    event.preventDefault()
    var selectElement = document.querySelector('input[type="text"]')
    var selectedValue = selectElement.value
    var reversedWord = selectedValue.split('').reverse().join('')
    document.querySelector('p').innerHTML = reversedWord
})




