angular.module('starter.controller2', [])
  .controller('tabController', ['$scope', function ($scope) {

  }])
  .controller('homeController', ['$scope','$http',function ($scope, $http) {
  	$scope.myActiveSlide = 1;
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