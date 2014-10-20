angular.module('shop.single',['common'])
    .controller('SingleCtrl',['Products','$stateParams', function(Products,$stateParams){
        var single = this;
        single.product = {};

        Products.get($stateParams.gameId).then(function(result){
            single.product = result.data;
        },function(err){

        })

    }]);