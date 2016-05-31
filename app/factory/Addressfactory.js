'use strict';
app.factory("addressStorage", function($q, $http, firebaseURL){
  var getAddressList = function() {
    var addresses = [];
    // let user = AuthFactory.getUser();
    return $q(function(resolve, reject) {
       $http.get(`${firebaseURL}addresses.json`)
        .success(function(addressObject) {
          var addressCollection = addressObject;
          Object.keys(addressCollection).forEach(function(key) {
            addressCollection[key].id = key;
            addresses.push(addressCollection[key]);
          })
          resolve(addresses);
        })
        .error(function(error) {
          reject(error);
        });
    })
  }
  var deleteAddress = function(addressId) {
    return $q(function(resolve, reject) {
      $http
        .delete(firebaseURL + "addresses/" + addressId + ".json")
        .success(function(objectFromFirebase) {
          resolve(objectFromFirebase)
        });
    });
  };

var postNewAddress = function(newAddress) {
  return $q(function(resolve, reject){
    $http.post(
        firebaseURL + "addresses.json",
        JSON.stringify({
          name: newAddress.name,
          cellPhoneNum: newAddress.cellPhoneNum,
          emailAddress: newAddress.emailAddress,
          streetAddress: newAddress.streetAddress,
          // uid: user.id
        })
      )
        .success(
          function(objectFromFirebase) {
            resolve(objectFromFirebase);
          });
  });
}; 
var getSingleAddress = function(addressId) {
  return $q(function(resolve, reject){
    $http.get(firebaseURL + "addresses/" + addressId + ".json")
    .success(function(addressObject) {
      resolve(addressObject); 
    })
    .error(function(error){
      reject(error); 
    })
  });
}

var updateAddress = function(addressId, newAddress) {
  return $q(function(resolve, reject){
    $http.put(
      firebaseURL + "addresses/" + addressId + ".json",
      JSON.stringify({
        name: newAddress.name,
        cellPhoneNum: newAddress.cellPhoneNum,
        emailAddress: newAddress.emailAddress,
        streetAddress: newAddress.streetAddress, 
        // uid: user.id
      })
      )
    .success(
      function(objectFromFirebase){
        resolve(objectFromFirebase);
      })
  })
}

var updateCompletedAddress = function(newAddress){
  return $q(function(resolve, reject){
    $http.put(
      firebaseURL + "addresses/" + newAddress.Id + ".json",
      JSON.stringify({
        name: newAddress.name,
        cellPhoneNum: newAddress.cellPhoneNum,
        emailAddress: newAddress.emailAddress,
        streetAddress: newAddress.streetAddress,
        // uid: user.Id
      })
      )
    .success(
      function(objectFromFirebase){
        resolve(objectFromFirebase);
      });
  });
};

return {updateCompletedAddress:updateCompletedAddress, updateAddress:updateAddress, getSingleAddress:getSingleAddress, getAddressList: getAddressList, deleteAddress: deleteAddress, postNewAddress: postNewAddress}
})