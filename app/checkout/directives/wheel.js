angular.module('checkout').directive('wheel',['Cart','$state',function(Cart,$state) {
    return {
        restrict: 'E',
        transclude : true,
        templateUrl: 'app/checkout/views/wheel.html',
        link : function link(scope, element, attrs) {
            scope.cart = Cart.getCart();

            scope.goToProduct = function(product){
                $state.go('details',product);
            }


        }

    };
}])