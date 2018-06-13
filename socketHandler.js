var request = require('request');
var mail = require('./mail');
var database = require('./database');

var currentData = {}
var currentHoldings = {}
var client = {};

var getPrice = (fsyms, callback) => {
  if (fsyms) {
    console.log(`${new Date} :: GET PRICE :: ${fsyms}`)
    request.get({
      uri: 'https://min-api.cryptocompare.com/data/pricemultifull',
      qs: {
        tsyms: 'USD,BTC',
        fsyms
      }
    }, (error, response, body) => {
      if (error) {
        console.log(`Get Price error: ${error}`)
      } else if (response && body) {
        currentData = JSON.parse(body);
        //
        // for (var key in currentData.RAW) {
        //   currentData.RAW[key].USD.CURRENTCOST = currentData.RAW[key].USD.PRICE * holding[key].volumn
        //   currentData.RAW[key].USD.DIFFUSD = currentData.RAW[key].USD.CURRENTCOST - (holding[key].volumn*holding[key].usd)
        //   currentData.RAW[key].USD.DIFFBTC = holding[key].volumn * (currentData.RAW[key].BTC.PRICE - holding[key].btc)
        // }
        callback(currentData)
      }
    })
  } else {
    currentData = {};
    callback(currentData)
  }
}

module.exports = {
  socketHandler(socket) {
    console.log('A socket with id ' + socket.id + ' connected!');

    client[socket.id] = socket;

    // client[socket.id].emit('GAMES_UPDATE', {
    //   data: currentData
    // });
    // client[socket.id].emit('HOLDING_INFO', {
    //   holdings: currentHoldings
    // });
    //
    // socket.on('ADD_HOLDING', (data) => {
    //   database.addHolding(data, () => {
    //     this.getHolding();
    //   });
    // });
    // socket.on('REMOVE_HOLDING', (data) => {
    //   database.removeHolding(data, () => {
    //     this.getHolding();
    //   });
    // });
    // socket.on('ADD_SYMBOL', (data) => {
    //   database.addSymbol(data, () => {
    //     this.getData();
    //   })
    // });
    // socket.on('REMOVE_SYMBOL', (data) => {
    //   database.removeSymbol(data, () => {
    //     this.getData();
    //   })
    // });
    socket.on('GET_DATA', (data) => {
      database.getHeroRelationList(data.sortBy, (error, result) => {
        for (var i in client) {
          if (client[i]) {
            client[i].emit('SERVER_RESPONSE', {
              result,
            });
          }
        }
      })
    })
    socket.on('disconnect', function() {
      console.log('===== DISCONNECT: ' + socket.id);
      delete client[socket.id];
    });
  },
  getData() {
    database.getSymbolList((symbolList) => {
      var symbolListStr = []
      for (var i of symbolList) {
        symbolListStr.push(i.symbol)
      }
      symbolListStr = symbolListStr.join(',')
      getPrice(symbolListStr, (data) => {
        for (var i in client) {
          if (client[i]) {
            client[i].emit('GAMES_UPDATE', {
              data,
            });
          }
        }
      });
    })
  },
  getHolding() {
    database.getHolding((holdings) => {
      currentHoldings = holdings
      for (var i in client) {
        if (client[i]) {
          client[i].emit('HOLDING_INFO', {
            holdings,
          });
        }
      }
    })
  },
  sendEmail() {
    if (currentData && currentHoldings) {
      mail.sendNotificationEmail(currentData, currentHoldings)
    }
  }
}