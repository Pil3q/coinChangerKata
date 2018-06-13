class coin {
  constructor(result = '', amount = 0) {
    this.result = result
    this.amount = amount
  }
  change(amount) {
    this.howMany50p(amount)
    this.howMany20p()
    this.howMany10p()
    this.howMany5p()
    return this.result
  }
  howMany50p(amount) {
    var fiftyPCoinsNumber = Math.floor(amount / 50)
    this.result += fiftyPCoinsNumber.toString() + ' x 50p '
    this.amount = amount
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
    var tenPCoinsNumber = Math.floor(this.amount / 5)
    this.result += tenPCoinsNumber.toString() + ' x 5p '
    this.amount -= tenPCoinsNumber * 5
  }
}
exports.coin = coin;

// Coins 50p 20p 10p 5p 2p 1p aim to return the least amount of coins
