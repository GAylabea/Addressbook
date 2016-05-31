// now a controller - we put the name of the controller (traditionally with Ctrl) and add a function with scope 
  // don't forget to put the name of the controller inside the index file
app.controller("AddressCtrl", function($scope) {
  $scope.welcome = "hello";
  $scope.showListView = true;
  $scope.newAddress = {};
  $scope.addresses = [
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

$scope.newAddress = function(){
    console.log("you clicked new item"); 
    $scope.showListView = false;
  };

$scope.allAddress = function(){
    console.log("you clicked all item");
    $scope.showListView = true;
  };

$scope.addNewAddress = function() {
  $scope.newTask.isCompleted = false; 
  $scope.newTask.id = $scope.items.length; 
  console.log("you added a new address", $scope.newTask);
  $scope.items.push($scope.newTask);  
  $scope.newTask = ""; 
  }
});
