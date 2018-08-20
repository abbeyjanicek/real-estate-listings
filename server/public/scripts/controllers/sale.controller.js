realEstateApp.controller('SaleController', ['$http', function ($http) {
    console.log('SaleController GO!');

    const self = this;
    self.property = { list: [{ cost: '3000', sqft: '100', type: 'rental', city: 'Minneapoli', imagepath: 'rental2.jpeg' }] };

    function getSaleProperty() {
        console.log('in getSaleProperty');
        $http({
            method: 'GET',
            url: '/sale'
        }).then(function (response) {
            console.log('SaleController - getSale response', response.data);
            self.property.list = response.data;
        }).catch(function (error) {
            console.log('SaleController - getSale error', error.statusText);
        })
    }

    getSaleProperty();

    self.deleteSaleProperty = function (property) {
        $http({
            method: 'DELETE',
            url: '/sale/' + property.id
        }).then(function (response) {
            console.log('SaleController - deleteSaleProperty - response');
            getSaleProperty();
        }).catch(function (error) {
            console.log('SaleController - deleteSaleProperty - error', error.statusText);
        });
    }//end deleteSaleProperty
}]); //end SaleController