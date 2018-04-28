(function(){
    var LunchCheck = angular.module('LunchCheck', []).controller('LunchCheckController', ['$scope', function LunchCheckController($scope){
        $scope.orderMenu = function() {
            if(!$scope.lunchMenu) {
                $scope.message = "Please enter data first";
            } else {
                var lunch = $scope.lunchMenu.split(",").filter(Boolean)
                if (lunch && lunch.length>0 && lunch.length<=3) {
                    $scope.message = "Enjoy!"
                } else if(lunch && lunch.length>3) {
                    $scope.message = "Too Much!"
                } else {
                    $scope.message = "Please enter data first";
                }
            }
        };
    }]);
}());