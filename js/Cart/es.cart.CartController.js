(function (module) {
    "use strict";

    module.controller('CartController', CartController);

    function CartController($scope, cartService){
        $scope.cartItems = cartService.getCartItems();
        $scope.getTotalAmount = getTotalAmount;


        _init();

        ///////// method definitions ///////////
        function _init() {
            console.log('CartController ==> SCOPE ID :: ' + $scope.$id);
        }

        function getTotalAmount() {
            var total = 0.00;
            for(var i = 0; i < $scope.cartItems.length; i++) {
                total = total + parseFloat($scope.cartItems[i].qty*$scope.cartItems[i].price);
            }
            return total;
        }
    }
})(angular.module('es.cart'));