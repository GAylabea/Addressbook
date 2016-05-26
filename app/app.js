// we are adding the angular app - and in the parens, are the name of the app and empty brackets
var app = angular.module("AddressBook", ["ngRoute"]);

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
        when("/address/details", {
            templateUrl: "partials/address-details.html",
            controller: "AddressViewCtrl"
        }).
        otherwise("/address/list");
});