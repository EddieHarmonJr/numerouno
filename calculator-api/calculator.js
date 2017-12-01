const express = require('express')
const app = express()
const port = 8000;


app.get('/add/:num1/:num2', (req, res) => {
    var number1 = parseInt(req.params.num1)
    var number2 = parseInt(req.params.num2)

    var results = {
        num1: parseInt(number1),
        num2: parseInt(number2),
        result: parseInt(number1) + parseInt(number2)
    }
    // console.log(typeof(number2))
    // res.send(results)
    // learned using NaN is better than using typeof Number for some reason
    console.log(typeof (number1), typeof (Number(number1)), number1)
    if (isNaN(number1) || isNaN(number2)) { //typeof Number(number1)) {
        // number !== number = false
        res.send("You have not entered two numbers. Try Again.")
    } else {

        res.send(results)
    }
})


app.get('/sub/:num1/:num2', (req, res) => {
    var number1 = parseInt(req.params.num1)
    var number2 = parseInt(req.params.num2)

    var results = {
        num1: parseInt(number1),
        num2: parseInt(number2),
        result: parseInt(number1) - parseInt(number2)
    }

    if (isNaN(number1) || isNaN(number2)) {
        res.send("You have not entered two numbers. Try Again.")
    } else {
        res.send(results)
    }
})

app.get('/mul/:num1/:num2', (req, res) => {
    var number1 = parseInt(req.params.num1)
    var number2 = parseInt(req.params.num2)

    var results = {
        num1: parseInt(number1),
        num2: parseInt(number2),
        result: parseInt(number1) * parseInt(number2)
    }
    
    if (isNaN(number1) || isNaN(number2)){
        res.send("You have not entered two numbers. Try Again.")
    } else {
        res.send(results)
    }
})


app.get('/div/:num1/:num2', (req, res) => {
    var number1 = parseInt(req.params.num1)
    var number2 = parseInt(req.params.num2)

    var results = {
        num1: parseInt(number1),
        num2: parseInt(number2),
        result: parseInt(number1) / parseInt(number2)
    }

    if (isNaN(number1) || isNaN(number2)){
        res.send("You have not entered two numbers. Try Again.")
    } else {
        res.send(results)
    }
})


app.get('*', (req, res) => {
    res.send(`This API is a calculator that will add, subtract, multiply or divide any 2 numbers given when provided with a particular URL format. 
    <br/> For example: going to localhost:8000/add/4/5 will return a value of 9. 
    <br/> Here are the operations: 
    <br/>add = add 
    <br/>subtract = sub 
    <br/>multiply = mul 
    <br/>and divide = div
    <br/>Follow any operation with a / and then a digit and then another / and another digit.`)
  })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})