realEstateApp.controller('HomeController', ['$http', function($http) {
    console.log('HomeController GO!');
    
    const self = this;
    self.property = { list: [{ cost: '3000', sqft: '100', type: 'rental', city: 'Minneapolis', image_path: 'rental2.jpg' }]};
    //self.propertyToAdd = { cost: '', sqft: '', type: '', city: '', image_path: ''};    


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
    }//end addProperty

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
        }//end getProperty

    getProperty();

    self.deleteProperty = function (property) {
        $http({
            method: 'DELETE',
            url: '/home/' + property.id
        }).then(function (response) {
            console.log('HomeController - deleteProperty - response');
            getProperty();
        }).catch(function (error) {
            console.log('HomeController - deleteProperty - error', error.statusText);
        });
    }//end deleteProperty

}]); //end HomeController