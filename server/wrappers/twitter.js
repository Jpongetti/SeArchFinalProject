
module.exports = TwitterAPI;

function TwitterAPI() {

    var self = this;

    self.get = function(req, res) {
        console.log(req);
        res.send('Inside Twitter');
    }

}