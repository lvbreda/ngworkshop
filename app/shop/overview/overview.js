angular.module('shop.overview',['common'])
    .controller('OverviewCtrl',['Products','$state','Cart',function(Products,$state,Cart){
        var overview = this;
        overview.products=[];

        overview.goToProduct = function(product){
            $state.go('details',product);
        }
        overview.buyProduct = function(product){
            Cart.addItem(product);
        }
        Products.getAll().then(function(result){
            overview.products = result.data;
        },function(err){

        })
    }])