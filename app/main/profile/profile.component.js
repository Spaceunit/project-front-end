'use strict';
//profile component;

angular.
  module('profile').
  component('profile', {
    templateUrl: 'main/profile/profile.template.html',
    controller: ['$scope',
      function ProfileController($scope) {
        //this.some = 0
        //adding a role
        this.imageURL = 'media/photo.jpg';
        this.height = 300;
        this.width  = 200;
        this.name = 'Lol'
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
