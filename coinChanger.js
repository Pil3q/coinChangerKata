class coin {
  constructor(result = '', amount = 0) {
    this.result = result
    this.amount = amount
  }
  change(amount) {
    this.howMany2pounds(amount)
    this.howManyPounds()
    this.howMany50p()
    this.howMany20p()
    this.howMany10p()
    this.howMany5p()
    this.howMany2p()
    this.howMany1p()
    return this.result
  }
  howMany2pounds(amount) {
    var twoPoundCoinsNumber = Math.floor(amount / 200)
    this.result += twoPoundCoinsNumber.toString() + ' x two pounds '
    this.amount = amount
    this.amount -= twoPoundCoinsNumber * 200
  }
  howManyPounds() {
    var poundCoinsNumber = Math.floor(this.amount / 100)
    this.result += poundCoinsNumber.toString() + ' x pound '
    this.amount -= poundCoinsNumber * 100
  }
  howMany50p() {
    var fiftyPCoinsNumber = Math.floor(this.amount / 50)
    this.result += fiftyPCoinsNumber.toString() + ' x 50p '
    this.amount -= fiftyPCoinsNumber * 50
  }
  howMany20p() {
    var twentyPCoinsNumber = Math.floor(this.amount / 20)
    this.result += twentyPCoinsNumber.toString() + ' x 20p '
    this.amount -= twentyPCoinsNumber * 20
  }
  howMany10p() {
    var tenPCoinsNumber = Math.floor(this.amount / 10)
    this.result += tenPCoinsNumber.toString() + ' x 10p '
    this.amount -= tenPCoinsNumber * 10
  }
  howMany5p() {
    var fivePCoinsNumber = Math.floor(this.amount / 5)
    this.result += fivePCoinsNumber.toString() + ' x 5p '
    this.amount -= fivePCoinsNumber * 5
  }
  howMany2p() {
    var twoPCoinsNumber = Math.floor(this.amount / 2)
    this.result += twoPCoinsNumber.toString() + ' x 2p '
    this.amount -= twoPCoinsNumber * 2
  }
  howMany1p() {
    var onePCoinsNumber = Math.floor(this.amount / 1)
    this.result += onePCoinsNumber.toString() + ' x 1p'
    this.amount -= onePCoinsNumber * 1
  }
}
exports.coin = coin;

// Coins 50p 20p 10p 5p 2p 1p aim to return the least amount of coins
