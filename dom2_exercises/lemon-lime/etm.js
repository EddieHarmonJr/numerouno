let paragraphs = document.querySelectorAll('p')

for (var i = 0; i < paragraphs.length; i+= 2) {
    paragraphs[i].classList.add('bgGreen')
}

for (var i = 1; i < paragraphs.length; i+= 2) {
    paragraphs[i].classList.add('bgYellow')
}
