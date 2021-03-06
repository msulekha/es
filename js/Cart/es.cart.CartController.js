(function (module) {
    "use strict";

    module.controller('CartController', CartController);

    /**!
     * CartController: Controller function for the cart page
     * @param $scope
     * @param cartService
     * @constructor
     */
    function CartController($scope, cartService){
        $scope.cartItems = cartService.getCartItems();
        $scope.getTotalAmount = getTotalAmount;


        _init();

        ///////// method definitions ///////////
        /**!
         * _init: initial function
         * @private
         */
        function _init() {
            console.log('CartController ==> SCOPE ID :: ' + $scope.$id);
        }

        /**!
         * getTotalAmount: function to calculate the total 
         *                  items added to the cart
         * @returns {number}
         */
        function getTotalAmount() {
            var total = 0.00;
            for(var i = 0; i < $scope.cartItems.length; i++) {
                total = total + parseFloat($scope.cartItems[i].qty*$scope.cartItems[i].price);
            }
            return total;
        }
    }
})(angular.module('es.cart'));