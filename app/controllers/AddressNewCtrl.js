// We need to name the controller and make sure each submit option is defined in case left blank. Also, we are passing thru the scope
// (ng's in the address-new partial) and the location plus the defined, by me not Angualr, itemStorage (which is located in the itemList controller)
app.controller("AddressNewCtrl", function($scope, $location, addressStorage) {
  $scope.title = "New Address";
  $scope.submitButtonText = "Add New Address"; 
  $scope.newAddress = {
    name: "",
    cellPhoneNum: "",
    emailAddress: "",
    streetAddress: "", 
    uid: ""
  };
  // this function gets called in the address-new partial - I think?
  $scope.addNewAddress = function() {
    addressStorage.postNewAddress($scope.newAddress)
    .then(function successCallback(response){
      console.log(response);
      $location.url("/address/list");
    });
  };
}); 

