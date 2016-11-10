
var https = require('https');

module.exports = TradierWrapper;

function TradierWrapper (key) {
    
    var self = this;

    var _key = key;

    var _host = 'sandbox.tradier.com';

    /**
     * Returns information gathered from Tradier about a symbol
     * 
     * Handle:
     * api/getSymbol/AAPL
     */
    self.getSymbol = function(clientReq, clientRes) {

        var tReq = https.request({
            host: _host,
            port: 443,
            headers: {
                'Authorization': 'Bearer ' + _key,
                'Accept': 'application/json'
            },
            path: '/v1/markets/quotes?symbols=' + clientReq.params.symbol,
            method: 'GET'
        }, function(tRes) {
            tRes.setEncoding('utf8');

            console.log('Tradier:getSymbol(' + clientReq.params.symbol + '): ' + tRes.statusCode + ' status');
            
            tRes.on('data', function(d) {
               clientRes.send(d);
            });

        });

        tReq.end();

        tReq.on('error', function(e) {
            console.error('Error talking with Tradier: ', e);
            clientRes.send(e);
        });

    }

}
