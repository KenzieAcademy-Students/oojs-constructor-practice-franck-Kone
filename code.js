/** 1. Coin Constructor
 * Fill in the properties and methods inside of the coin function */

const Coin = function () {
  //Add coin properties and methods here
  this.state = 0;
  this.flip = function () {
    let coinPart = Math.round(Math.random())
    this.state += coinPart
  }
  this.toString = function () {
    if (this.state) {
      return 'heads'
    } else {
      return 'tails'
    }
  }
}

/** 2. Chicken Coop Constructor, 
 * fill in the properties and methods inside of the Coop function */

const Coop = function (numChickens) {
  //Add the chicken coop properties and methods here
  this.numChickens = numChickens;
  this.gatherEggs = function () {
    let numEgg = Math.round(Math.random() * 2) + 1

    return numEgg * this.numChickens
  }
}


/** 3. Feed Vending Machine Constructor, 
 * fill in the properties and methods inside of the FeedMachine function */

const FeedMachine = function () {
  //Add the feed vending machine properties and methods here
  this.food = 12;
  this.numCoins = 0;

  this.dispense = function (coin) {
    this.coin = coin;
    if (this.coin) {
      console.log(this.food)
      if (this.food >= 5) {
        this.food -= 5;
        this.numCoins += 1
        return this.food

      } else if (this.food < 5) {
        this.food -= this.food
        this.numCoins += 1
        return this.food

      }
    
    } else if(!this.coin && this.food) {
      this.food = this.food
      this.numCoins = this.numCoins
      return 0
    } else if (!this.coin && !this.food){
      return 0
    }

  }
}
