var https = require('https');
module.exports = RedditAPI;

function RedditAPI() {

    var self = this;
	process.stdout.write("hello: ");
	var _host = 'reddit.com/r/finance.json';
	
    self.getHeadlines = function(clientReq, clientRes) {

        var tReq = https.request({
            host: _host,
            port: 443,
           
            method: 'GET'
        }, function(tRes) {
            tRes.setEncoding('utf8');
            tRes.on('data', function(d) {
               clientRes.send(d);
            });
        });

        tReq.end();

        tReq.on('error', function(e) {
            console.error('Error talking with Reddit: ', e);
            clientRes.send(e);
        });

    }

}