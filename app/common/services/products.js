angular.module('common').service('Products',['$http','BASEURL',function($http,BASEURL){
    var self  = this;

    self.getAll = function(){
        return $http.get(BASEURL + 'game');
    }
    self.get = function(id){
        return $http.get(BASEURL +'game/' + id);
    }
}])