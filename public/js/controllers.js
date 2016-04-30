"use strict";

var app = angular.module("pokedexApp");

app.controller("homeController", function() {
   console.log("Home Controller");
});

app.controller("kantoController", function ($scope, PokedexServices) {
    console.log("Kanto Controller");
    $scope.currentPokedex = "Kanto Pokedex";
    
    PokedexServices.getPokedex(2)
        .then(function (response) {
            var pokedexEntries = response.data.pokemon_entries;
            $scope.pokedexEntries = pokedexEntries;
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
    
});