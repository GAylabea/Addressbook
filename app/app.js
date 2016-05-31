"use strict";
// we are adding the angular app - and in the parens, are the name of the app and empty brackets
var app = angular.module("AddressBook", ["ngRoute"])
.constant("firebaseURL", "https://addressbooknss.firebaseio.com/")

app.config(function($routeProvider) {
    $routeProvider.
        when("/address/list",{
            templateUrl: "partials/address-list.html",
            controller: "AddressListCtrl"
        }).
        when("/address/new", {
            templateUrl: "partials/address-new.html",
            controller: "AddressNewCtrl"
        }).
        when("/address/:addressId", {
            templateUrl: "partials/address-details.html",
            controller: "AddressViewCtrl"
        }).
        when("/address/:addressId/edit", {
            templateUrl: "partials/address-new.html",
            controller: "AddressEditCtrl",
        }).
        otherwise("/address/list");
});