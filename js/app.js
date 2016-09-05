(function(){
    angular.module('myApp',[

        /**!
         * angularjs modules like ngRoute, ngResource etc
         **/
        'ngRoute',
        'ngCookies',
        
        
        /**!
         * Third party components modules
         **/
        
        
        /**!
         * project feature modules like shop, 
         * checkout, page etc 
         **/
        'es.header',
        'es.home',
        'es.shop',
        'es.cart',
        'es.wish'
    ]);
})();