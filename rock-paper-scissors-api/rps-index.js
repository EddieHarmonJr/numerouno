const express = require('express')
const app = express()
const port = 8000;

var play = ["rock", "paper", "scissors"]

var wins = ["rockscissors", "scissorspaper", "paperrock"]
var losses = ["scissorsrock", "paperscissors", "rockpaper"]

app.get('/', (req, res) => {
  res.send('You are about to play Rock, Paper, Scissors!')
})

app.get('/:user', (req, res) => {
  var aiResponse = play[Math.floor(Math.random() * play.length)]
  console.log(aiResponse)
  
  // This if/else statement checks validity
  if (!play.includes(req.params.user)) {
    res.send("Not a valid entry.")
  } else if (req.params.user === aiResponse){
    res.send(`You played: ${req.params.user}...While the computer chose: ${aiResponse} This is a tie game!`)
  } else if (losses.includes(req.params.user + aiResponse)) {
      res.send(`You played: ${req.params.user}...While the computer chose: ${aiResponse} YOU LOSE!`)
  } else if (wins.includes(req.params.user + aiResponse)) {
      res.send(`You played: ${req.params.user}...While the computer chose: ${aiResponse} You WON!`)
  } else {
    res.send(`You played: ${req.params.user}...While the computer chose: ${aiResponse}`) //How can I get these on two lines?
  }

  //This if/else statement checks wins/losses/ties

})

// app.get('*', (req, res) => {
//   res.redirect('/')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})