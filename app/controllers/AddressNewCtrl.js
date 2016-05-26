app.controller("AddressNewCtrl", function($scope) {
  $scope.newAddress = {};
  $scope.items = [
  {
    id: 0,
    name: "George Clooney",
    cellPhoneNum: "503-236-1918",
    emailAddress: "gClooney@gmail.com",
    streetAddress: "Somewhere in LA, London or Italy"
  },
  {
    id: 1,
    name: "Tom Hardy",
    cellPhoneNum: "503-236-1918",
    emailAddress: "madMax@gmail.com",
    streetAddress: "Australia"
  },
  {
    id: 2,
   name: "Dwayne Johnson",
    cellPhoneNum: "503-236-1918",
    emailAddress: "theArtistFormerlyKnownAsTheRock@gmail.com",
    streetAddress: "Miami, FL"
    }
  ];

$scope.addNewAddress = function() {
  $scope.newAddress.isCompleted = false; 
  $scope.newAddress.id = $scope.items.length; 
  console.log("you added new address", $scope.newAddress);
  $scope.items.push($scope.newAddress);  
  $scope.newAddress = ""; 
  }
});
