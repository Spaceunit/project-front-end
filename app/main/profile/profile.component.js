'use strict';
//profile component;

angular.
  module('profile').
  component('profile', {
    templateUrl: 'main/profile/profile.template.html',
    controller: [
      function ProfileController($scope) {
        //this.some = 0
        //adding a role
        $scope.addRole = function addRole(id){
          id = 0;
        };
        //deleting a role
        $scope.delRole = function delRole(id){
          id = 0;
        };
      }
    ]
  });
