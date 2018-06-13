# Coin changer

To see the project in a full glance - just clone the repo and run:
```
npm install
npm test
```
Then you will see a lot of green from friend jasmine + amazing coverage thanks to istanbul.

Once you are certain that the app is full tested you can simply run it with node or any js environment and if for any reason you struggle with giving out the change with as little coins as possible you will get a little guidance.
It looks more or less like that:

```javascript
> changer = require('./coinChanger.js')
{ coin: [Function: coin] }
> coin = new changer.coin()
coin { result: '', amount: 0 }
> coin.change(1.75)
'0 x two pounds 1 x pound 1 x 50p 1 x 20p 0 x 10p 1 x 5p 0 x 2p 0 x 1p'
>
```
