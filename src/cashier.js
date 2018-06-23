class cashier {
  constructor() {
    this.content = {
      twoPounds: 100,
      onePound: 100,
      fiftyP: 100,
      twentyP: 100,
      tenP: 100,
      fiveP: 100,
      twoP: 100,
      oneP: 100,
    }
  }

loadCoins(quantity, value) {
  if(value * 100 == 200){
    this.content.twoPounds += quantity
  }
  else if(value * 100 == 100){
    this.content.onePound += quantity
  }
  else if (value * 100 == 50) {
    this.content.fiftyP += quantity
  }
  else if (value * 100 == 20) {
    this.content.twentyP += quantity
  }
  else if (value * 100 == 10) {
    this.content.tenP += quantity
  }
  else if (value * 100 == 5) {
    this.content.fiveP += quantity
  }
  else if (value * 100 == 2) {
    this.content.twoP += quantity
  }
  else if (value * 100 == 1) {
    this.content.oneP += quantity
  }
  else
    throw `There is no such a coin !`
}
}
exports.cashier = cashier;
