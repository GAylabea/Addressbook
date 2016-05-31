app.controller("AddressViewCtrl", function($scope, $routeParams, addressStorage) {
  $scope.addresses = [];
  $scope.selectedAddress = {}; 
  // console.log($routeParams, addressId); 

  addressStorage.getAddressList().then(function(addressCollection){
    $scope.addresses = addressCollection;

    $scope.selectedAddress = $scope.items.filter(function(address){
      return address.id === $routeParams.addressId;
      })[0];
  });
});
