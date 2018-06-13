let changer = require('../coinChanger.js')

describe('coin changer', function(){
  beforeEach(function(){
    coin = new changer.coin()
  })
  describe('returns two biggest coins when amount dividible', function(){
    it('returns 2 x 50p when We will pass a pound (100p)', function(){
      expect(coin.change(100)).toEqual('2 x 50p 0 x 20p 0 x 10p 0 x 5p 0 x 2p 0 x 1p')
    })
    it('returns 2 x 20p if 40p passed', function(){
      expect(coin.change(40)).toEqual('0 x 50p 2 x 20p 0 x 10p 0 x 5p 0 x 2p 0 x 1p')
    })
    it('returns 2 x 10p if 20p passed', function(){
      expect(coin.change(30)).toEqual('0 x 50p 1 x 20p 1 x 10p 0 x 5p 0 x 2p 0 x 1p')
    })
    it('returns 2 x 5p if 10p passed', function(){
      expect(coin.change(15)).toEqual('0 x 50p 0 x 20p 1 x 10p 1 x 5p 0 x 2p 0 x 1p')
    })
    it('returns 2 x 2p if 4p passed', function(){
      expect(coin.change(4)).toEqual('0 x 50p 0 x 20p 0 x 10p 0 x 5p 2 x 2p 0 x 1p')
    })
    it('returns 2 x 1p if 2p passed', function(){
      expect(coin.change(3)).toEqual('0 x 50p 0 x 20p 0 x 10p 0 x 5p 1 x 2p 1 x 1p')
    })
    it('returns 99p change right', function(){
      expect(coin.change(99)).toEqual('1 x 50p 2 x 20p 0 x 10p 1 x 5p 2 x 2p 0 x 1p')
    })
    it('returns 36p change right', function(){
      expect(coin.change(36)).toEqual('0 x 50p 1 x 20p 1 x 10p 1 x 5p 0 x 2p 1 x 1p')
    })
  })
})
