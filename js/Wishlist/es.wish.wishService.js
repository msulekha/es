(function (module) {
    "use strict";

    module.factory('wishService', wishService);

    function wishService($rootScope){
        var wishlistItems = [];

        /**!
         *
         * @param item
         */
        function addItemToWishlist(item) {
            var itemCheckObj = _itemAlreadyExistsInWishlist(item);
            if(itemCheckObj.status) {
                alert("Item already added to wishlist");
            } else {
                // add item to wishlist and broadcast item.added.to.wishlist
                // to the header controller to update the "wishlist" count in UI

                //no need to track the item qty
                // when adding to wishlist
                //item.qty = 1;
                wishlistItems.push(item);

                $rootScope.$broadcast('item.added.to.wishlist', {"product": item});
            }
        }

        /**!
         *
         * @param item
         */
        function removeItemFromWishlist(item){

        }

        /**!
         *
         * @returns {Array}
         */
        function getWishlistItems(){
            return wishlistItems;
        }

        function _itemAlreadyExistsInWishlist(item){
            var itemExists = {
                status: false,
                itemIndex: -1
            };

            for(var i = 0; i < wishlistItems.length; i++ ){
                if(item.id == wishlistItems[i].id){
                    itemExists.status = true;
                    itemExists.itemIndex = i;
                    break;
                }else{
                    continue;
                }
            }
            return itemExists;
        }




        return {
            addItemToWishlist: addItemToWishlist,
            removeItemFromWishlist: removeItemFromWishlist,
            getWishlistItems: getWishlistItems
        };
    }
})(angular.module('es.wish'));

/*




*/
