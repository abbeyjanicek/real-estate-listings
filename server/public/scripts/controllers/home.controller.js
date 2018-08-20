realEstateApp.conroller('HomeController', ['$http', function($http) {
    console.log('HomeController GO!');
    
    const self = this;
    self.property = { list: [{name: 'test property', price: '500,000', type: 'for sale'}] };
    self.propertyToAdd = { name: '', price: '', type: ''};
    getProperty();

    self.addProperty = function(property) {
        console.log('in addProperty');
        $http({
            method: 'POST',
            url: '/home',
            data: property
        }).then(function (response) {
            console.log('HomeController - addProperty - response: ', response.data);
            self.propertyToAdd = { name: '', price: '', type: ''};
            getProperty();            
        }).catch(function (error) {
            console.log('HomeController - addProperty - error: ', error.statusText);
        });
    }

    function getProperty() {
        $http({
            method: 'GET',
            url: '/home'
        })
    }









}]); //end HomeController