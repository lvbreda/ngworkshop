angular.module('common')
    .service('Cart',[function(){
        var self = this;
        self.cart = [];

        self.getCart = function(){
            return self.cart;
        };
        self.addItem = function(item){
            self.cart.push(item);
        };
        self.removeItem = function(item){
            var index;
            for(var i in self.cart){
                if(self.cart[i].id === item.id){
                    index = i;
                }
            }
            if(index){
                self.cart.splice(index,1);
            }
        };
        return self;
    }])
