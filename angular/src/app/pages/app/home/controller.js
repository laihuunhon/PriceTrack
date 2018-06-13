export default class HomeController {
  constructor(SocketService, $scope) {
    'ngInject'

    Object.assign(this, { SocketService, $scope })

    this.totalNetUSD = 0;
    this.totalNetBTC = 0;
    this.totalPLUSD = 0;
    this.totalPLBTC = 0;

    SocketService.on('GAMES_UPDATE', (response) => {
      $scope.$apply(() => {
        this.data = response.data;
      });
    });
    SocketService.on('HOLDING_INFO', (response) => {
      $scope.$apply(() => {
        this.holdings = response.holdings;
      });
    });

    $scope.$watch(() => this.data, () => {
      this.totalNetUSD = 0;
      this.totalNetBTC = 0;
      this.totalPLUSD = 0;
      this.totalPLBTC = 0;

      console.log(this.holdings)
      if (this.holdings && this.holdings.length > 0) {
        for (const item of this.holdings) {
          this.totalNetUSD += item.volumn * item.usd
          this.totalNetBTC += item.volumn * item.btc
          this.totalPLUSD += item.volumn * (this.data.RAW[item.symbol].USD.PRICE - item.usd)
          this.totalPLBTC += item.volumn * (this.data.RAW[item.symbol].BTC.PRICE - item.btc)
        }
      }
    })
  }
  addSymbol() {
     const { trackSymbol }  = this;
     this.SocketService.emit('ADD_SYMBOL', {
       symbol: trackSymbol
     })
  }
  removeSymbol(symbol) {
    this.SocketService.emit('REMOVE_SYMBOL', {
      symbol
    })
  }
  addHolding() {
    const { symbol, volumn } = this;
    let { usd, btc } = this;
    if (!usd) {
      usd = (btc * this.data.RAW[symbol].USD.PRICE / this.data.RAW[symbol].BTC.PRICE).toFixed(8)
    }
    if (!btc) {
      btc = (usd * this.data.RAW[symbol].BTC.PRICE / this.data.RAW[symbol].USD.PRICE).toFixed(8)
    }
    this.SocketService.emit('ADD_HOLDING', {
      symbol,
      volumn,
      usd,
      btc,
    })
  }
  removeHolding(id) {
    this.SocketService.emit('REMOVE_HOLDING', {
      id
    });
  }
}