let changer = require('../coinChanger.js')

describe('coin changer', function(){
  beforeEach(function(){
    coin = new changer.coin()
  })
  describe('returns two biggest coins when amount dividible', function(){
    it('returns 2 x 50p when We will pass a pound (100p)', function(){
      expect(coin.change(100)).toEqual('2 x 50p 0 x 20p ')
    })
    it('returns 2 x 20p if 40p passed', function(){
      expect(coin.change(40)).toEqual('0 x 50p 2 x 20p ')
    })
    // it('returns 2 x 10p if 20p passed', function(){
    //   expect(coin.change(20)).toEqual('2 x 10p')
    // })
    // it('returns 2 x 5p if 10p passed', function(){
    //   expect(coin.change(10)).toEqual('2 x 5p')
    // })
    // it('returns 2 x 2p if 4p passed', function(){
    //   expect(coin.change(4)).toEqual('2 x 2p')
    // })
    // it('returns 2 x 1p if 2p passed', function(){
    //   expect(coin.change(2)).toEqual('2 x 1p')
    // })
  })
})
