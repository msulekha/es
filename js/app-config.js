(function(app){
    app.config(configure);

    function configure($routeProvider){
        $routeProvider
            .when('/home',
                {
                    templateUrl:'./partial/home.html',
                    controller:'HomeController'
                })
            .when('/shop',
                {
                    templateUrl:'./partial/shop.html',
                    controller:'ShopController'
                })
            .when('/cart',
                {
                    templateUrl:'./partial/cart.html',
                    controller:'CartController'
                })
            .otherwise({
                redirectTo:'/home'
            });
    }
})(angular.module('myApp'));