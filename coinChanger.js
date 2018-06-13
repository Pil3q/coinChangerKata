class coin {
  constructor(result = '', amount = 0) {
    this.result = result
    this.amount = amount
  }
  change(amount) {
    this.howMany50p(amount)
    this.howMany20p(amount)
    return this.result
  }
  howMany50p(amount) {
    var fiftyPCoinsNumber = Math.floor(amount / 50)
    this.result += fiftyPCoinsNumber.toString() + ' x 50p '
    this.amount = amount
    this.amount -= fiftyPCoinsNumber * 50
  }
  howMany20p() {
    var fourtyPCoinsNumber = this.amount / 20
    this.result += fourtyPCoinsNumber.toString() + ' x 20p '
    this.amount -= fourtyPCoinsNumber * 20
  }
}
exports.coin = coin;

// Coins 50p 20p 10p 5p 2p 1p aim to return the least amount of coins
