app.controller("AddressListCtrl", function($scope, $http, $location, addressStorage) {
  $scope.addresses = [];
  addressStorage.getAddressList().then(function(addressCollection){
    console.log("addressCollection from Promise", addressCollection); 
    $scope.addresses = addressCollection;
  });

  $scope.addressDelete = function(addressId){
    console.log("addressId", addressId);
    addressStorage.deleteAddress(addressId).then(function(response){
      addressStorage.getAddressList().then(function(addressCollection){
        $scope.addresses = addressCollection;
      });
    });
  };
  $scope.inputChange = function(address){
    addressStorage.updateCompletedStatus(address)
    .then(function(response){
      console.log(response);
    });
  };
});