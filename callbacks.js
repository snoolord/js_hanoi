class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime()
    setInterval(() => this._tick() , 1000)
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let seconds = this.seconds
    let minutes = this.minutes
    let hours = this.hours
    if (this.seconds < 10) {
      seconds = `0${this.seconds}`
    }
    if (this.minutes < 10) {
      minutes = `0${this.minutes}`
    }
    if (this.hours < 10) {
      hours = `0${this.hours}`
    }
    console.log(`${hours}:${minutes}:${seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.

    if (this.seconds === 59) {
      this.minutes ++;
      this.seconds = 0;
    } else {
      this.seconds ++;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours ++;
    }
    if (this.hours === 25) {
      this.hours = 1
    }
    this.printTime();
  }
}

const clock = new Clock();

  const readline = require('readline');

  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


function addNumbers (sum, numsLeft, completionCallback) {

  if (numsLeft === 0) {
    reader.close()
    return completionCallback(sum)
  } else {
    reader.question("Give me a number.", function (number) {
      const num = parseInt(number)
      addToSum(sum, num)
    });
  }

  function addToSum(sum, number) {
    sum += number
    console.log(sum)
    sum += addNumbers(sum, numsLeft - 1, completionCallback)
  }
  return sum
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


  function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} greater than ${el2}`, function(answer) {
      let isGreaterThan = false
      if (answer === 'yes') {
        isGreaterThan = true;
      }
      callback(isGreaterThan);
    });
  }

  function innerBubbleSort(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if ( i === (arr.length-1)){
      return outerBubbleSortLoop(madeAnySwaps);
    }

    askIfGreaterThan(arr[i], arr[i + 1], function swap(isGreaterThan) {
      if (isGreaterThan) {
        [arr[i], arr[i+1]] = [arr[i + 1], arr[i]]
        madeAnySwaps = true
      }
      innerBubbleSort(arr, (i + 1), madeAnySwaps, outerBubbleSortLoop);
    });
  }


function absurdBubbleSort(arr, sortCompletionCallBack) {
  innerBubbleSort(arr, 0, false, outerBubbleSortLoop)
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSort(arr, 0, false, outerBubbleSortLoop)
    } else {

      sortCompletionCallBack(arr)
    }
  }
}

// absurdBubbleSort([5, 4, 3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

Function.prototype.myBind = function (object) {
  return () => {
    this.apply(object)
  }
}

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
}

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);
//
// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"
