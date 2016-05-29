//main.component.js
'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('main').
  component('main', {
    templateUrl: 'main/main.template.html',
    controller: ['Main',
      function PhoneListController(Main) {
        //some do
      }
    ]
  });
