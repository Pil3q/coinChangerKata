let changer = require('../src/coinChanger.js')

describe('coin changer', function(){
  beforeEach(function(){
    coin = new changer.coin()
  })
  describe('returns as little coins as possible', function(){
    it('when 90p passed looking for 50p coin', function(){
      expect(coin.change(0.90)).toEqual('0 x two pounds 0 x pound 1 x 50p 2 x 20p 0 x 10p 0 x 5p 0 x 2p 0 x 1p')
    })
    it('when 40p passed looking for 20p coin', function(){
      expect(coin.change(0.40)).toEqual('0 x two pounds 0 x pound 0 x 50p 2 x 20p 0 x 10p 0 x 5p 0 x 2p 0 x 1p')
    })
    it('when 30p passed looking for 10p coin', function(){
      expect(coin.change(0.30)).toEqual('0 x two pounds 0 x pound 0 x 50p 1 x 20p 1 x 10p 0 x 5p 0 x 2p 0 x 1p')
    })
    it('when 15p passed looking for 5p coin', function(){
      expect(coin.change(0.15)).toEqual('0 x two pounds 0 x pound 0 x 50p 0 x 20p 1 x 10p 1 x 5p 0 x 2p 0 x 1p')
    })
    it('when 4p passed looking for 2p coin', function(){
      expect(coin.change(0.04)).toEqual('0 x two pounds 0 x pound 0 x 50p 0 x 20p 0 x 10p 0 x 5p 2 x 2p 0 x 1p')
    })
    it('when 3p passed looking for 1p coin', function(){
      expect(coin.change(0.03)).toEqual('0 x two pounds 0 x pound 0 x 50p 0 x 20p 0 x 10p 0 x 5p 1 x 2p 1 x 1p')
    })
    it('when 99p passed looking for various coins 6 in total', function(){
      expect(coin.change(0.99)).toEqual('0 x two pounds 0 x pound 1 x 50p 2 x 20p 0 x 10p 1 x 5p 2 x 2p 0 x 1p')
    })
    it('when 36p passed looking for various coins 4 in total', function(){
      expect(coin.change(0.36)).toEqual('0 x two pounds 0 x pound 0 x 50p 1 x 20p 1 x 10p 1 x 5p 0 x 2p 1 x 1p')
    })
    it('when 178p passed looking for pound coin', function(){
      expect(coin.change(1.78)).toEqual('0 x two pounds 1 x pound 1 x 50p 1 x 20p 0 x 10p 1 x 5p 1 x 2p 1 x 1p')
    })
    it('when 278p passed looking for 2 pounds coin', function(){
      expect(coin.change(2.78)).toEqual('1 x two pounds 0 x pound 1 x 50p 1 x 20p 0 x 10p 1 x 5p 1 x 2p 1 x 1p')
    })
    it('does two changes and return right result', function(){
      coin.change(4.22)
      expect(coin.change(2.78)).toEqual('1 x two pounds 0 x pound 1 x 50p 1 x 20p 0 x 10p 1 x 5p 1 x 2p 1 x 1p')
    })
  })
})
