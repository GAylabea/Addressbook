app.controller("AddressListCtrl", function($scope) {
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
});