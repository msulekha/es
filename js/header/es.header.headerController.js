(function (module) {
    "use strict";

    module.controller('HeaderController', HeaderController);
    
    function HeaderController($location, $scope, shopService, cartService) {
        ///////// view model fields and methods////

        $scope.hasCartItems = false;
        $scope.cartItemsCount = 0;
        $scope.cartItemsCountDisplay = '';
        $scope.cartItems = [];
        $scope.goToCart = goToCart;



        $scope.$on('add.cart.item', _addItemToCart);


        _init();

        ///////// method definitions ///////////
        function _init() {
            console.log('HeaderController ==> SCOPE ID :: ' + $scope.$id);
        }

        /**!
         * _addItemToCart: <desc>
         * @param event
         * @param args
         * @private
         */
        function _addItemToCart(event, args) {
            /**!
             * Pseudo Logic:
             *    
             *
             */
            $scope.hasCartItems = true;

            
            var productId = args.id;
            var product = shopService.getProductById(productId);
            cartService.addItemToCart(product);

            $scope.cartItemsCount = cartService.getCartItems().length;
            if($scope.cartItemsCount > 10) {
                $scope.cartItemsCountDisplay = '10+';
            } else {
                $scope.cartItemsCountDisplay = new String($scope.cartItemsCount);
            }


            
        }

        function goToCart(){
            if ($scope.hasCartItems){
                $location.path('/cart');
            }else{
                alert("No Items in the Cart");
            }
        }


    }

})(angular.module('es.header'));