"use strict";

var app = angular.module("pokedexApp");

app.controller("homeController", function() {
   console.log("Home Controller");
});

app.controller("kantoController", function ($scope, PokedexServices) {
    console.log("Kanto Controller");
    $scope.currentPokedex = "Kanto Pokedex";
    $scope.numbers = 10;
    PokedexServices.getPokedex(2)
        .then(function (response) {
            console.log(response.data.pokemon_entries)
            $scope.pokedexEntries = response.data.pokemon_entries;
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });

});

app.controller("johtoController", function ($scope, PokedexServices) {
    console.log("Johto Controller");

    $scope.currentPokedex = "Johto";
    PokedexServices.getPokedex(3)
        .then(function (response) {
            var pokedexEntries = response.data.pokemon_entries;
            $scope.pokedexEntries = pokedexEntries;
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });

})