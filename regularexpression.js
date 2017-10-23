// var text = 'I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.'
// var pattern = /\b\w{3}\b/

// console.log(text.match(pattern))


// var text = 'I may not have been sure about what really did interest me, but I was absolutely sure about what didn\'t.';
// var pattern = /may/;

// console.log(pattern.exec(text));

// var text = 'I may not have been sure about what really did interest me, but I was absolutely sure about what didn\'t.';

// var pattern = /may/;

// console.log(text.match(pattern));


// var text = "I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world."

// var pattern = /\b\w{3}\b/g;

// console.log(text.match(pattern));





// var string = "This is an example..."
// var pattern = /\w+\W*S/
// console.log(string.match(pattern))



// Find the first capital letter in the text below:
// var text = "txtng: the Gr8 Db8"
// var pattern = /[A-Z]/

// console.log(text.match(pattern))





// Find the first number in the text below:

// var text = "There are 300,000,000 Americans, give or take."

// var pattern = /[0-9]/
// console.log(text.match(pattern))



//Find the first capitalized word in the text below:
var text = "txting: the Great Debate"
var pattern = /\b[A-Z]+\b/g





// var string = "This is an example of a hexadecimal number: af00cce1. So is this: AF11. A dad is hex but a mom isn't."
// var pattern = /\b[a-fA-F0-9]+\b/g;
// console.log(string.match(pattern))



// var html = '<html><head>'+
// '<title>Simple</title>'+
// '</head><body>'+
// 'Nothing to see here'+
// '</body></html>';



// pattern = /[<>/]\w+[></]/g
// console.log(html.match(pattern))

// var dates = ['01/01/2000', '12/31/1999', '02/29/2017'];

// var pattern = new RegExp('((\\d{1,2})/(\\d{1,2}))/(\\d{2,4})');

// for (var i = 0; i < dates.length; i++) {
//     var date = dates[i];

//     var dateMatch = date.match(pattern);
//     console.log(dateMatch)
//     var date = new Date(dateMatch[4], dateMatch[3] - 1, dateMatch[2]);
//     date.setMonth(date.getMonth() + 6);

//     console.log(date)
// }





