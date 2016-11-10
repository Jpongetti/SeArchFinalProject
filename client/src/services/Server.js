

var Rx = require('rx');

module.exports = Server;

/*
 * @ngInject
 */
function Server($http) {

    var self = this;

    /**
     * Grabs information about a specific symbol and pushes information
     * through an observable to be subscribed to.
     * 
     * Returns Rx.Observable<SymbolInformation>
     */
    self.getSymbol = function(symbol) {
        
        var response = new Rx.Subject();

        $http({
            method: 'GET',
            url: '/api/getSymbol/' + symbol
        }).then(function(x){
            response.onNext(x.data);
        });

        return response;
    }

}