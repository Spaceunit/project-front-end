//profile.component.js
'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('profile').
  component('profile', {
    templateUrl: 'main/profile/profile.template.html',
    controller: ['profile',
      function ProfileController(Role) {
        //this.some = 0
      }
    ]
  });
