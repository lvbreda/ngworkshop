angular.module('common')
    .service('Cart',[function(){
        var self = this;
        self.cart = [];

        self.getCart = function(){
            return self.cart;
        }
        self.addItem = function(item){
            
            self.cart.push(item);
        }
        return self;
    }])
