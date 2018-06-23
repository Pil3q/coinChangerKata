const cashier = require('../src/cashier.js')
class coin {
  constructor(amount = 0, till = new cashier.cashier()) {
    this.amount = amount
    this.till = till
  }
  change(amount) {
    this.amount = Math.ceil(amount * 100)
    var change = {
      twoPounds: this.howManyCoins(this.amount, 200, this.till.content.twoPounds),
      onePound: this.howManyCoins(this.amount, 100, this.till.content.onePound),
      fiftyP: this.howManyCoins(this.amount, 50, this.till.content.fiftyP),
      twentyP: this.howManyCoins(this.amount, 20, this.till.content.twentyP),
      tenP: this.howManyCoins(this.amount, 10, this.till.content.tenP),
      fiveP: this.howManyCoins(this.amount, 5, this.till.content.fiveP),
      twoP: this.howManyCoins(this.amount, 2, this.till.content.twoP),
      oneP: this.howManyCoins(this.amount, 1, this.till.content.oneP)
    }
    if (this.amount > 0) {
      return `${this.amount} cannot be changed, rest is ${change.twoPounds} x two pounds ${change.onePound} x pound ${change.fiftyP} x 50p ${change.twentyP} x 20p ${change.tenP} x 10p ${change.fiveP} x 5p ${change.twoP} x 2p ${change.oneP} x 1p`
    }
    else {
      return `${change.twoPounds} x two pounds ${change.onePound} x pound ${change.fiftyP} x 50p ${change.twentyP} x 20p ${change.tenP} x 10p ${change.fiveP} x 5p ${change.twoP} x 2p ${change.oneP} x 1p`
    }
    }
  howManyCoins(amount, coin, limit) {
    console.log(this.amount)
    var coinsNumber = Math.floor(amount / coin)
    if (coinsNumber > limit) {
      this.amount -= limit * coin
      this.till.takeCoins(limit, coin / 100)
      return limit
    }
    else {
      this.amount -= coinsNumber * coin
      this.till.takeCoins(coinsNumber, coin / 100)
      return coinsNumber;
    }
  }
}
exports.coin = coin;
