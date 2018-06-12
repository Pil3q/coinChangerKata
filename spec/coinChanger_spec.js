let changer = require('../coinChanger.js')

describe('coin changer', function(){
  beforeEach(function(){
    coinChanger = new changer.coinChanger()
  })
  it('returns 2 times 50p when We will pass a pound (100p)', function(){
    expect(coinChanger(100)).toEqual('2 x 50p')
  })
})
