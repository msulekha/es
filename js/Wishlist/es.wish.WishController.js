(function (module) {
    "use strict";

    module.controller('WishController', WishController);
    
    function WishController($scope, wishService){
        $scope.wishItems = wishService.getWishlistItems();
        $scope.getTotalAmount = getTotalAmount;

        _init();

        function _init() {
            console.log('WishController ==> SCOPE ID :: ' + $scope.$id);
        }

        function getTotalAmount() {
            var total = 0.00;
            for(var i = 0; i < $scope.wishItems.length; i++) {
                total = total + parseFloat($scope.wishItems[i].qty*$scope.wishItems[i].price);
            }
            return total;
        }
    }

})(angular.module('es.wish'));