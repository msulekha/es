(function (module) {
    "use strict";

    module.controller('HeaderController', HeaderController);
    
    function HeaderController($location, $scope, shopService, cartService, wishService) {
        ///////// view model fields and methods////

        /* below scope items helps us to control the header "cart" link to display the cart items */
        $scope.hasCartItems = false;
        $scope.cartItemsCount = 0;
        $scope.cartItemsCountDisplay = '';

        /* below scope items helps us to control the header "wishlist" link to display the wishlist items */
        $scope.hasWishlistItems = false;
        $scope.wishlistItemsCount = 0;
        $scope.wishlistItemsCountDisplay = '';


        /* methods gets invoked when the links "cart" & "wishlist" are clicked */
        $scope.goToCart = goToCart;
        $scope.goToWish = goToWish;

        /* 'add.cart.item' event listener function */
        $scope.$on('add.cart.item', _addItemToCart);

        /* 'item.added.to.wishlist' event listener function */
        $scope.$on('item.added.to.wishlist', _updateWishlistUI);


        /* header controller initial function call */
        _init();

        ///////// method definitions ///////////

        /**!
         *
         * @private
         */
        function _init() {
            console.log('HeaderController ==> SCOPE ID :: ' + $scope.$id);
        }

        /**!
         *
         * @param event
         * @param args
         * @private
         */
        function _updateWishlistUI(event, args) {
            //var product = args.product;
            $scope.hasWishlistItems = true;
            $scope.wishlistItemsCount = wishService.getWishlistItems().length;
            if($scope.wishlistItemsCount > 10) {
                $scope.wishlistItemsCount = '10+';
            } else {
                $scope.wishlistItemsCountDisplay = new String($scope.wishlistItemsCount);
            }
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

        /**!
         * goToCart: function to navigate to cart page
         */
        function goToCart(){
            if ($scope.hasCartItems){
                $location.path('/cart');
            }else{
                alert("No Items in the Cart");
            }
        }

        /**!
         * goToWish: function to navigate to wishlist page
         */
        function goToWish(){
            if ($scope.hasWishlistItems){
                $location.path('/wish');
            }else{
                alert("No Items in the Wish");
            }
        }
    }

})(angular.module('es.header'));