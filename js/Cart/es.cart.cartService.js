(function (module) {
    "use strict";

    module.factory('cartService', cartService);

    function cartService($cookies){
        var cartItems = [];
        
        function addItemToCart(item) {
            // addItemsToCart: Pseudo Code logic:
            //   check it the item already exists to cartItems array
            //     if yes then just update the qty (do not add item) for the
            //        item object in cartItems array
            //     else add the item defaulting the qty = 1 to cartItems array
            
            var itemCheckObj = _itemAlreadyExistsInCart(item);
            if(itemCheckObj.status) {
                cartItems[itemCheckObj.itemIndex].qty++;
            } else {
                item.qty = 1;
                cartItems.push(item);
            }

            // update the cart items to cookies
            _updateCartItemsToCookies(cartItems);
        }
        
        function removeItemFromCart(item) {
            // remove item from cart items
        }
        
        function getCartItems() {
            var cartItemsFromCookies = JSON.parse($cookies.get('es.cart.items'));
            if (cartItemsFromCookies) {
                cartItems = cartItemsFromCookies;
            }
            return cartItems;
            
        }
        function _itemAlreadyExistsInCart(item) {
            var itemExists = {
                status: false,
                itemIndex: -1
            };
            
            for(var i = 0; i < cartItems.length; i++ ){
                if(item.id == cartItems[i].id){
                    itemExists.status = true;
                    itemExists.itemIndex = i;
                    break;
                }else{
                    continue;
                }
            }
            return itemExists;
        }

        function _updateCartItemsToCookies(items) {
            $cookies.put('es.cart.items', JSON.stringify(items));
        }
        
        return {
            addItemToCart: addItemToCart,
            removeItemFromCart: removeItemFromCart,
            getCartItems: getCartItems
        };
    }
})(angular.module('es.cart'));