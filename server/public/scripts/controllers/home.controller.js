realEstateApp.controller('HomeController', ['$http', function($http) {
    console.log('HomeController GO!');
    
    const self = this;
    self.property = { list: [{ cost: '500,000', sqft: '1000', type: 'for sale', city: 'test city', imagepath: 'shiny.jpg'}] };
    self.propertyToAdd = { cost: '', sqft: '', type: '', city: '', imagepath: ''};
    //getProperty();

    self.addProperty = function(property) {
        console.log('in addProperty');
        $http({
            method: 'POST',
            url: '/home',
            data: property
        }).then(function (response) {
            console.log('HomeController - addProperty - response: ', response.data);
            self.propertyToAdd = { cost: '', sqft: '', type: '', city: '', imagepath: ''};
            getProperty();            
        }).catch(function (error) {
            console.log('HomeController - addProperty - error: ', error.statusText);
        });
    }

    









}]); //end HomeController