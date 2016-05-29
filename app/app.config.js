//app.config.js
angular.
  module('myApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/main', {
          template: '<profile></profile>'
        }).
        when('/main/profile', {
          template: '<costumer></costumer>'
        }).
        otherwise('/main');
    }
  ]);
