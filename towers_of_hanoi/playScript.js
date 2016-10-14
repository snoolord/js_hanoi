const Game = require("./hanoi")
const game = new Game();


game.run( function () {
  console.log("victory")
  reader.question("Wanna play again?", function(answer){
    if (answer === "yes")
    {
      let game = new Game();
    }
  })
})
