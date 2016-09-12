(function () {
  'use strict';

  angular.module('LunchCheckerApp', [])
  .controller('LunchCheckerCtrl', LunchCheckerCtrl);

  LunchCheckerCtrl.inject = ['$scope'];

  function LunchCheckerCtrl($scope){
    $scope.foodList = "";
    $scope.message = "Please enter data first";
    $scope.checkTooMuch = function(){
      var str = $scope.foodList.trim();
      var (console.log(str));
      if (str.length > 0) {
        var arr = str.trim().split(",").filter(Boolean);
        console.log(arr);
        if (arr.length <= 3){
          $scope.message = "Enjoy!";
        }else {
          $scope.message = "Too Much!";
        }
      }else{
        $scope.message = "Please enter data first";
      }
    };

  }


})();
