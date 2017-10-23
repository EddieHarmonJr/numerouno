//var now = new Date()
//var newDate = new Date(1943, 7, 4, 12, 43, 06, 1) //(year, month, date, hours, minutes, seconds, ms)



// getFullYear
// getMonth (Remember that javascript counts from 0 so the month of January is 0, Feb is 1)
// getDay
// getDate
// getHours
// getMinutes


// console.log(now.toString())
// console.log(newDate.toString())
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDay())

// now.setFullYear(now.getFullYear() - 1 ) //This will make the year 2016

// var msPerHour = 1000 * 60 * 60 //There's 1,000 miliseconds in a second, 
//times 60 will give you 1 minute, times 60 will give you an hour

// 
var now = new Date(2016, 1, 28)
var date = now


function getDateBefore(date, days) {
    date.setDate(date.getDate() + 2);
    console.log(date.toString())
}

console.log(getDateBefore(date, 4))