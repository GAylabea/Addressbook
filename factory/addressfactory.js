'use strict';
app.factory("addressStorage", function($q, $http){
  var getAddressList = function() {
    var items = [];
    return $q(function(reslove, reject) {
      $http.get("https://addressbooknss.firebaseio.com/items.json")
        .success(function(itemObject) {
          var itemCollection = itemObject;
          Object.keys(itemCollection).forEach(function(key){
            itemCollection[key].id = key;
            items.push(itemCollection[key]);
          })
          resolve(items);
        })
        .error(function(error) {
          reject(error);
        });
    })
  }
  var deleteItem = function(itemId) {
    return $q(function(resolve, reject) {
      $http
        .delete(`https://addressbooknss.firebaseio.com/items{itemId}.json`)
        .success(function(objectFromFirebase) {
          resolve(objectFromFirebase)
        })
    })
  }

var postNewItem = function(newItem) {
  return$q(function(reslove, reject){
    $http.post(
        "https://addressbooknss.firebaseio.com/items/.json",
        JSON. sringify({
          name: newAddress.name,
          cellPhoneNum: newAddress.cellPhoneNum,
          emailAddress: newAddress.emailAddress,
          streetAddress: newAddress.streetAddress
        })
      )
        .success(
          function(objectFromFirebase) {
            reslove(objectFromFirebase);
          });
  });
}
return {getAddressList: getAddressList, deleteItem: deleteItem, postNewItem: postNewItem}
})