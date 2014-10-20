angular.module('app',['common','shop','checkout','ui.router']).config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/products");
    //
    // Now set up the states
    $stateProvider
        .state('products', {
            url: '/products',
            templateUrl: 'app/shop/overview/views/overview.html',
            controller: 'OverviewCtrl as overview'
        })
        .state('details', {
            url: "/details/:gameId",
            templateUrl: "app/shop/single/views/single.html",
            controller : 'SingleCtrl as single'
        })

})
