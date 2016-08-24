(function(module) {
    
    module.factory('shopService', shopService);

    function shopService($rootScope){

        /**!
         *   Another way to define the service implementation of the
         *   service method
         */
        /*var service = {};

         service.getProducts = function() {
         var productsData = [
         {
         id: 1,
         image: 'product1.jpg',
         imageName: 'product1',
         remarks: 'Easy Polo Black Edition',
         price: '$56'
         },
         {
         id: 2,
         image: 'product2.jpg',
         imageName: 'product2',
         remarks: 'Easy Polo Black Edition',
         price: '$56'
         },
         {
         id: 3,
         image: 'product3.jpg',
         imageName: 'product3',
         remarks: 'Easy Polo Black Edition',
         price: '$56'
         },
         {
         id: 4,
         image: 'product4.jpg',
         imageName: 'product4',
         remarks: 'Easy Polo Black Edition',
         price: '$56'
         },
         {
         id: 5,
         image: 'product5.jpg',
         imageName: 'product5',
         remarks: 'Easy Polo Black Edition',
         price: '$56'
         },
         {
         id: 6,
         image: 'product6.jpg',
         imageName: 'product6',
         remarks: 'Easy Polo Black Edition',
         price: '$56'
         },
         {
         id: 7,
         image: 'product7.jpg',
         imageName: 'product7',
         remarks: 'Easy Polo Black Edition',
         price: '$56'
         },
         {
         id: 8,
         image: 'product8.jpg',
         imageName: 'product8',
         remarks: 'Easy Polo Black Edition',
         price: '$56'
         },
         {
         id: 9,
         image: 'product9.jpg',
         imageName: 'product9',
         remarks: 'Easy Polo Black Edition',
         price: '$56'
         },
         {
         id: 10,
         image: 'product10.jpg',
         imageName: 'product10',
         remarks: 'Easy Polo Black Edition',
         price: '$56'
         },
         {
         id: 11,
         image: 'product11.jpg',
         imageName: 'product11',
         remarks: 'Easy Polo Black Edition',
         price: '$56'
         },
         {
         id: 12,
         image: 'product12.jpg',
         imageName: 'product12',
         remarks: 'Easy Polo Black Edition',
         price: '$56'
         }
         ];
         return productsData;
         };

         return service;*/

        return {
            getProducts: getProducts,
            getCategoryItems: getCategoryItems,
            getBrands: getBrands,
            addItemToCart: addItemToCart,
            getProductById: getProductById
        };

        ////////service method implementations////////
        function getProductById(productId) {
            var products = getProducts();
            return (angular.element.grep(products,
                                 function(item){
                                    return item.id == productId;
                                 }
                                ))[0];
        }

        function addItemToCart(productId) {
            $rootScope.$broadcast('add.cart.item', {id: productId});
        }
        
        function getCategoryItems() {
            var categoryItems = ['sportswear',
                'mens',
                'womens',
                'kids',
                'fashion',
                'households',
                'interiors',
                'clothing',
                'bags',
                'shoes'];

            return categoryItems;
        }

        function getProducts() {
            var productsData = [
                {
                    id: 1,
                    image: 'product1.jpg',
                    imageName: 'product1',
                    remarks: 'Easy Polo Black Edition',
                    price: 16,
                    name: 'product1'
                },
                {
                    id: 2,
                    image: 'product2.jpg',
                    imageName: 'product2',
                    remarks: 'Easy Polo Black Edition',
                    price: 45,
                    name: 'product2'
                },
                {
                    id: 3,
                    image: 'product3.jpg',
                    imageName: 'product3',
                    remarks: 'Easy Polo Black Edition',
                    price: 76,
                    name: 'product3'
                },
                {
                    id: 4,
                    image: 'product4.jpg',
                    imageName: 'product4',
                    remarks: 'Easy Polo Black Edition',
                    price: 12.99,
                    name: 'product4'
                },
                {
                    id: 5,
                    image: 'product5.jpg',
                    imageName: 'product5',
                    remarks: 'Easy Polo Black Edition',
                    price: 34,
                    name: 'product5'
                },
                {
                    id: 6,
                    image: 'product6.jpg',
                    imageName: 'product6',
                    remarks: 'Easy Polo Black Edition',
                    price: 17.99,
                    name: 'product6'
                },
                {
                    id: 7,
                    image: 'product7.jpg',
                    imageName: 'product7',
                    remarks: 'Easy Polo Black Edition',
                    price: 35,
                    name: 'product7'
                },
                {
                    id: 8,
                    image: 'product8.jpg',
                    imageName: 'product8',
                    remarks: 'Easy Polo Black Edition',
                    price: 18,
                    name: 'product8'
                },
                {
                    id: 9,
                    image: 'product9.jpg',
                    imageName: 'product9',
                    remarks: 'Easy Polo Black Edition',
                    price: 15,
                    name: 'product9'
                },
                {
                    id: 10,
                    image: 'product10.jpg',
                    imageName: 'product10',
                    remarks: 'Easy Polo Black Edition',
                    price: 11,
                    name: 'product10'
                },
                {
                    id: 11,
                    image: 'product11.jpg',
                    imageName: 'product11',
                    remarks: 'Easy Polo Black Edition',
                    price: 13,
                    name: 'product11'
                },
                {
                    id: 12,
                    image: 'product12.jpg',
                    imageName: 'product12',
                    remarks: 'Easy Polo Black Edition',
                    price: 19,
                    name: 'product12'
                }
            ];
            return productsData;
        }

        function getBrands() {
            var brands = [  'acne',
                'grune erde',
                'albiro',
                'ronhill',
                'oddmolly',
                'boudestijn',
                'rosch creative culture'];

            return brands;
        }
    }
    
})(angular.module('es.shop'));