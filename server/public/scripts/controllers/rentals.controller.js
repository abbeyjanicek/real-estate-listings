realEstateApp.controller('RentalsController', ['$http', function($http) {
    console.log('RentalsController GO!');
    
    const self = this;
    self.property = { list: [{ cost: '3000', sqft: '100', type: 'rental', city: 'Minneapoli', imagepath: 'rental2.jpeg' }]};


 self.deleteProperty = function (property) {
    $http({
        method: 'DELETE',
        url: '/property/' + property.id
    }).then(function (response) {
        console.log('RentalsController - deleteRental - response');
        getProperty();
    }).catch(function (error) {
        console.log('RentalsController - deleteRentals - error', error.statusText);
    });
}
}]); //end RentalsController