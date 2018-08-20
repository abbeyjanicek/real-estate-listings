realEstateApp.controller('HomeController', ['$http', function($http) {
    console.log('HomeController GO!');
    
    const self = this;
    self.property = { list: [{ cost: '3000', sqft: '100', type: 'rental', city: 'Minneapolis', image_path: 'rental2.jpeg' }]};
    self.propertyToAdd = { cost: '', sqft: '', type: '', city: '', image_path: ''};    


    self.addProperty = function(property) {
        console.log('in addProperty');
        $http({
            method: 'POST',
            url: '/home',
            data: property
        }).then(function (response) {
            console.log('HomeController - addProperty - response: ', response.data);
            self.propertyToAdd = { cost: '', sqft: '', type: '', city: '', image_path: ''};
            getProperty();            
        }).catch(function (error) {
            console.log('HomeController - addProperty - error: ', error.statusText);
        });
    }

    function getProperty() {
        console.log('in getProperty');
        $http({
            method: 'GET',
            url: '/home'
        }).then(function (response) {
            console.log('HomeController - getProperty response', response.data);
            self.property.list = response.data;            
        }).catch(function (error) {
            console.log('HomeController - getProperty error', error.statusText);
        })
        }

    getProperty();


}]); //end HomeController