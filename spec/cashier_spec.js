let changer = require('../src/coinChanger.js')
let cashier = require('../src/cashier.js')

describe('cashier', function(){
  beforeEach(function(){
    till = new cashier.cashier();
  });
  describe('#load', function(){
    it('2 pounds', function(){
      till.loadCoins(2, 2.00)
      expect(till.content.twoPounds).toEqual(102)
    })
    it('1 pounds', function(){

      till.loadCoins(2, 1.00)
      expect(till.content.onePound).toEqual(102)
    })
    it('50p', function(){
      till.loadCoins(2, 0.50)
      expect(till.content.fiftyP).toEqual(102)
    })
    it('20p', function(){
      till.loadCoins(2, 0.20)
      expect(till.content.twentyP).toEqual(102)
    })
    it('10p', function(){
      till.loadCoins(2, 0.10)
      expect(till.content.tenP).toEqual(102)
    })
    it('5p', function(){
      till.loadCoins(2, 0.05)
      expect(till.content.fiveP).toEqual(102)
    })
    it('2p', function(){
      till.loadCoins(2, 0.02)
      expect(till.content.twoP).toEqual(102)
    })
    it('1p', function(){
      till.loadCoins(2, 0.01)
      expect(till.content.oneP).toEqual(102)
    })
    it('wrong amount', function(){
      expect(function() {
        till.loadCoins(2, 0.03);
      }).toThrow("There is no such a coin !");
    })
  })
});
