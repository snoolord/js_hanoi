const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor (){
    this.towers = [[3,2,1], [], []]
  }

  promptMove(callback, completionCallback) {
    console.log(this.towers);
    reader.question("What tower do you want to take from?", function (fromTower) {
      reader.question("What tower do you want to put this disk on?", function(toTower) {
        const fTower = parseInt(fromTower);
        const tTower = parseInt(toTower);
        callback(fTower, tTower, completionCallback);
      });
    });
  }

  valid_move(fromTower, toTower) {
    let fTower = this.towers[fromTower];
    let tTower = this.towers[toTower];

    if (tTower.length === 0){
      return true
    } else if (fTower.length === 0){
      return false;
    } else if (fTower[fTower.length - 1] > tTower[tTower.length - 1]) {
      return false
    }
    return true
  }

  move_disks(fromTower, toTower, completionCallback) {
    if (this.valid_move(fromTower, toTower)) {
      this.towers[toTower].push(this.towers[fromTower].pop());
      this.print()
    }
    this.run(completionCallback)
  }

  print() {
    console.log("Towers: " + JSON.stringify(this.towers));
  }

  isWon() {
    if (this.towers[2].length === 3) {
      return true;
    }
    return false;
  }

  run(completionCallback) {
    if (this.isWon()) {
      reader.close()
      completionCallback()
    } else {
      this.promptMove(this.move_disks.bind(this), completionCallback);
    }
  }
}

module.exports = Game;
