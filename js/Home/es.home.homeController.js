(function(app){
    app.controller("HomeController", HomeController);

    function HomeController($scope, homeService){
        
        _init();
        
        // method definitions
        function _init() {
            console.log('HomeController ==> SCOPE ID :: ' + $scope.$id);
        }

    }
})(angular.module('es.home'));