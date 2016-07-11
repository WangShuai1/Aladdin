angular.module('starter.controller2', [])
  .controller('tabController', ['$scope', function ($scope) {

  }])
  .controller('homeController', ['$scope','$http', '$timeout', '$ionicLoading',function ($scope, $http, $timeout, $ionicLoading) {
  	$scope.myActiveSlide = 1;
    // Setup the loader
      $ionicLoading.show({
        content: 'loading',
        animation: 'fade-out',
        showBackdrop: true,
        maxWidth: 100,
        showDelay: 0
      });
    
    // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
      $timeout(function () {
        $ionicLoading.hide();
      }, 2000);
    // $scope.does-continue = true;
    // $http.get('./mock/index.json')
    // .then(
    //   function (res) {
    //     $scope.livelist = res.data.msg;
    //     $scope.banner = res.data.msg.top_banner;
    //     $scope.guideSwpier = new Swiper('.guide-swiper',{
    //        loop: true,
    //        autoplay:1000,
    //     // 如果需要分页器
    //     pagination: '.swiper-pagination'
    //      });
    //   },
    //   function (err) {
    //     $log.error(err);
    //   }
    //)
   
    // $http({
    //   url: '../mock/index.json',
    //   params: {
    //     id: $routeParams.id
    //   },
    //   method: 'get'
    // }).then(
    //   function (res) {
    //     vm.course = res.data.data;
    //   }
    // )

  }])