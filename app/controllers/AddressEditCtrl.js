// this defines our keys - in case it's left blank, 
app.controller("AddressEditCtrl", function($scope, $location, $routeParams, addressStorage) {
  // if you want to post to the DOM, do this:
  $scope.title="Edit Address";
  $scope.submitButtonText = "Update"
  $scope.newAddress = {};

  addressStorage.getSingleAddress($routeParams.addressId)
    .then(function successCallback(response) {
      $scope.newAddress=response; 
    })
// instead of doing the traditional promise, we are quickly using this function to add a new item and post the list to the DOM
// (remember, itemStorage is in the itemListCtrl) - also, notice the $scope.newTask which attaches itself to the html
$scope.addNewAddress = function() {
    addressStorage.updateAddress($routeParams.addressId, $scope.newAddress)
      .then(function successCallback(response){
        // console.log(response)
        $location.url("/address/list");
      }); 
    };
  }); 
