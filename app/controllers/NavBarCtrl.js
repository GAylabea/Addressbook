app.controller("NavBarCtrl", function($scope){
  $scope.navItems = [
  {
    name: "Logout", 
    url: "#/logout"
    }, 
    {
    name: "All Addresses",
    url: "#/address/list"
  }, 
  {
    name: "New Address", 
    url: "#/address/new"
  }
  ];
});