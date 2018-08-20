realEstateApp.controller('RentalsController', ['$http', function ($http) {
    console.log('RentalsController GO!');

    const self = this;
    self.property = { list: [{ cost: '3000', sqft: '100', type: 'rental', city: 'Minneapoli', imagepath: 'rental2.jpeg' }] };

    function getRental() {
        console.log('in getRental');
        $http({
            method: 'GET',
            url: '/rentals'
        }).then(function (response) {
            console.log('RentalsController - getRental response', response.data);
            self.property.list = response.data;
        }).catch(function (error) {
            console.log('RentalsController - getRental error', error.statusText);
        })
    }

    getRental();

    self.deleteRental = function (property) {
        $http({
            method: 'DELETE',
            url: '/rentals/' + property.id
        }).then(function (response) {
            console.log('RentalsController - deleteRental - response');
            getProperty();
        }).catch(function (error) {
            console.log('RentalsController - deleteRentals - error', error.statusText);
        });
    }
}]); //end RentalsController