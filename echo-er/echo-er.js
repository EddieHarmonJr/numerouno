var header = document.querySelector('h1')
document.addEventListener('keypress', function(event) {
    if (!event.ctrlKey) {
        header.innerHTML += event.key;
        if (/^[A-Z]$/.test(event.key)) {
            header.style.textDecoration = 'underline';
        } else if ('.?!'.includes(event.key)) {
            header.style.textDecoration = 'none';
        }
    }
});