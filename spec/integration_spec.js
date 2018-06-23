let changer = require('../src/coinChanger.js')
let cashier = require('../src/cashier.js')

describe('cashier', function(){
  beforeEach(function(){
    coin = new changer.coin();
    coin.till.content.twoPounds = 1
    coin.till.content.onePound = 1
    coin.till.content.fiftyP = 1
    coin.till.content.twentyP = 1
    coin.till.content.tenP = 1
    coin.till.content.fiveP = 1
    coin.till.content.twoP = 1
    coin.till.content.oneP = 1
  });
  it('2.53 does not go funny', function(){
    expect(coin.change(2.53)).toEqual('1 x two pounds 0 x pound 1 x 50p 0 x 20p 0 x 10p 0 x 5p 1 x 2p 1 x 1p')
  })
  it('will return 2 x pound when no 2 pounds', function(){
    coin.till.content.twoPounds = 0
    coin.till.content.onePound = 2
    expect(coin.change(2.53)).toEqual('0 x two pounds 2 x pound 1 x 50p 0 x 20p 0 x 10p 0 x 5p 1 x 2p 1 x 1p')
  })
  it('will not return full amount when not enough coins', function(){
    coin.till.content.twoPounds = 0
    coin.till.content.onePound = 1
    expect(coin.change(2.53)).toEqual('65 cannot be changed, rest is 0 x two pounds 1 x pound 1 x 50p 1 x 20p 1 x 10p 1 x 5p 1 x 2p 1 x 1p')
  })
});
