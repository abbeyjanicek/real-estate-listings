let realEstateApp = angular.module('realEstateApp', ['ngRoute']);

realEstateApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'HomeController as hc',
    }).when('/rentals', {
        templateUrl: 'views/rentals.html',
        controller: 'RentalsController as rc'
    }).when('/sale', {
        templateUrl: 'views/sale.html',
        controller: 'SaleController as sc'
    }).otherwise('404', {
        templateUrl: 'views/404.html'
    })
})

