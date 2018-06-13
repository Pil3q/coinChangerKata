let changer = require('../coinChanger.js')

describe('coin changer', function(){
  beforeEach(function(){
    coin = new changer.coin()
  })
  describe('returns as little coins as possible', function(){
    it('returns 1 x 50p and 2 x 20 when We will pass a 90p', function(){
      expect(coin.change(90)).toEqual('0 x two pounds 0 x pound 1 x 50p 2 x 20p 0 x 10p 0 x 5p 0 x 2p 0 x 1p')
    })
    it('returns 2 x 20p if 40p passed', function(){
      expect(coin.change(40)).toEqual('0 x two pounds 0 x pound 0 x 50p 2 x 20p 0 x 10p 0 x 5p 0 x 2p 0 x 1p')
    })
    it('returns 1 x 20p 1 x 10p if 30p passed', function(){
      expect(coin.change(30)).toEqual('0 x two pounds 0 x pound 0 x 50p 1 x 20p 1 x 10p 0 x 5p 0 x 2p 0 x 1p')
    })
    it('returns 1 x 10p and 1 x 5p if 15p passed', function(){
      expect(coin.change(15)).toEqual('0 x two pounds 0 x pound 0 x 50p 0 x 20p 1 x 10p 1 x 5p 0 x 2p 0 x 1p')
    })
    it('returns 2 x 2p if 4p passed', function(){
      expect(coin.change(4)).toEqual('0 x two pounds 0 x pound 0 x 50p 0 x 20p 0 x 10p 0 x 5p 2 x 2p 0 x 1p')
    })
    it('returns 1 x 2p and 1 x 2p if 2p passed', function(){
      expect(coin.change(3)).toEqual('0 x two pounds 0 x pound 0 x 50p 0 x 20p 0 x 10p 0 x 5p 1 x 2p 1 x 1p')
    })
    it('returns 99p change right', function(){
      expect(coin.change(99)).toEqual('0 x two pounds 0 x pound 1 x 50p 2 x 20p 0 x 10p 1 x 5p 2 x 2p 0 x 1p')
    })
    it('returns 36p change right', function(){
      expect(coin.change(36)).toEqual('0 x two pounds 0 x pound 0 x 50p 1 x 20p 1 x 10p 1 x 5p 0 x 2p 1 x 1p')
    })
    it('returns 178p change right', function(){
      expect(coin.change(178)).toEqual('0 x two pounds 1 x pound 1 x 50p 1 x 20p 0 x 10p 1 x 5p 1 x 2p 1 x 1p')
    })
    it('returns 278p change right', function(){
      expect(coin.change(278)).toEqual('1 x two pounds 0 x pound 1 x 50p 1 x 20p 0 x 10p 1 x 5p 1 x 2p 1 x 1p')
    })
  })
})
