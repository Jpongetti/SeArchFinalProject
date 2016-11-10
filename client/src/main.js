var angular = require('angular');

require('angular-material');
require('rx-angular');

var app = angular.module('TradeNet', ['ngMaterial', 'rx'])

require('./services');
require('./directives');

angular.bootstrap(document, ['TradeNet']);
