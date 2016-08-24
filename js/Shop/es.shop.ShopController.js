(function(module){
    module.controller("ShopController", ShopController);

    function ShopController($scope, shopService){
        /**!
         * list the view model items including the fields & methods and
         * then provide the method implementation details later
         **/

        /**!
         * sample illustration is here

        // view model data (i.e. building the scope data used in view page)
        $scope.item1 = '';
        $scope.item2 = '';
        $scope.m1 = m1;
        $scope.m2 = m2;
        $scope.m3 = m3;

         // initial function call
         init()

        // method implementation details
        function init() {
            .....
        }

        function m1() {
            ...
            ...

        }

        function m2() {
        ...
        ...

        }

        function m3() {
        ...
        ...

        }
         **/




        $scope.currentPriceRange = 200;
        $scope.categoryItems = shopService.getCategoryItems();
        $scope.brands = shopService.getBrands();
        $scope.products = shopService.getProducts();
        $scope.addItemToCart = addItemToCart;



        _init();

        ///////// method definitions ///////////
        function _init() {
            console.log('ShopController ==> SCOPE ID :: ' + $scope.$id);
        }
        
        function addItemToCart(productId) {
            shopService.addItemToCart(productId);
        }


    }
})(angular.module('es.shop'));