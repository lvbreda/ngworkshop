angular.module('shop.single',['common'])
    .controller('SingleCtrl',['Products','$stateParams','Cart', function(Products,$stateParams,Cart){
        var single = this;
        single.product = {};


        single.removeFromCart = function(){
            Cart.removeItem(single.product);
        }
        Products.get($stateParams.gameId).then(function(result){
            single.product = result.data;
        },function(err){

        })

    }]);