let changer = require('../src/coinChanger.js')
let cashier = require('../src/cashier.js')

describe('cashier', function(){
  beforeEach(function(){
    coin = new changer.coin();
    cashier = new cashier.cashier();
  });
  describe('#load', function(){
    it('got money in', function(){
      cashier.load(2, 50)
      expect(cashier.content.fiftyP).toEqual(2)
    })
  })
});
