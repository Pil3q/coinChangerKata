class coin {
  constructor(amount = 0) {
    this.amount = amount
  }
  change(amount) {
    this.amount = amount * 100
    var change = {
      twoPounds: this.howManyCoins(this.amount, 200),
      onePound: this.howManyCoins(this.amount, 100),
      fiftyP: this.howManyCoins(this.amount, 50),
      twentyP: this.howManyCoins(this.amount, 20),
      tenP: this.howManyCoins(this.amount, 10),
      fiveP: this.howManyCoins(this.amount, 5),
      twoP: this.howManyCoins(this.amount, 2),
      oneP: this.howManyCoins(this.amount, 1)
    }
    return `${change.twoPounds} x two pounds ${change.onePound} x pound ${change.fiftyP} x 50p ${change.twentyP} x 20p ${change.tenP} x 10p ${change.fiveP} x 5p ${change.twoP} x 2p ${change.oneP} x 1p`

  }
  howManyCoins(amount, coin) {
    var coinsNumber = Math.floor(amount / coin)
    this.amount -= coinsNumber * coin
    return coinsNumber;
  }
}
exports.coin = coin;
