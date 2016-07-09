// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('listController', ['$scope', '$ionicListDelegate', function ($scope, $ionicListDelegate) {
  $scope.scrollAction = function () {
    console.log('scrolling...');
  };

  $scope.scrollEndAction = function () {
    console.log('scroll complete~');
  };

  var items = [
    {
      title: 'titlew',
      description: 'description 1'
    },
    {
      title: 'title0',
      description: 'description 1'
    },
    {
      title: 'title-1',
      description: 'description 1'
    },
    {
      title: 'title-2',
      description: 'description 1'
    },
    {
      title: 'title1',
      description: 'description 1'
    },
    {
      title: 'title2',
      description: 'description 1'
    },
    {
      title: 'title3',
      description: 'description 1'
    },
    {
      title: 'title4',
      description: 'description 1'
    },
    {
      title: 'title5',
      description: 'description 1'
    },
    {
      title: 'title6',
      description: 'description 1'
    },
    {
      title: 'title7',
      description: 'description 1'
    },
    {
      title: 'title8',
      description: 'description 1'
    },
    {
      title: 'title9',
      description: 'description 1'
    }
  ];

  $scope.items = items;

  $scope.showDelete = false;

  $scope.showReorder = false;

  $scope.moveItem = function (item, $fromIndex, $toIndex) {
    items.splice($fromIndex, 1);
    items.splice($toIndex, 0, item);
  }

  $scope.showDeleteButton = function () {
    $ionicListDelegate.showDelete($scope.showDelete = !$scope.showDelete);
  }
}])
