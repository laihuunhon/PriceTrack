const api_key = 'key-a0bda20ef6a2e4573798d289d793032a'
const domain = 'sandboxb29ac985354f4cfdad103aefe1c60173.mailgun.org'
const mailgun = require('mailgun-js')({
  apiKey: api_key,
  domain: domain
})

var template = {
  from: 'PriceTrackSupport <postmaster@sandboxb29ac985354f4cfdad103aefe1c60173.mailgun.org>',
  to: 'laihuunhon@gmail.com',
  subject: 'Price Track notification',
};

module.exports = {
  sendNotificationEmail(currentData, currentHoldings) {
    template.text = ``;
    // for (const holding of currentHoldings) {
    //   const { symbol, usd, volumn } = holding;
    //   const diff = volumn * (currentData.RAW[symbol].USD.PRICE - usd)
    //   template.text += `Symbol: ${symbol} --- P/L: ${diff}\n`
    // }
    // mailgun.messages().send(template, (error) => {
    //   if (error) {
    //     console.log(`Send email error: ${error}`)
    //   } else {
    //     console.log(`Send email success`)
    //   }
    // });
  }
}