app.controller("NavBarCtrl", function($scope){
  $scope.navItems = [
  {
    name: "Logout", 
    url: "#/logout"
    }, 
    {
    name: "All Addresses",
    url: "#/items/list"
  }, 
  {
    name: "New Address", 
    url: "#/items/new"
  }
  ];
});