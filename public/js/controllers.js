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

    $scope.currentPokedex = "Johto Pokedex";
    PokedexServices.getPokedex(3)
        .then(function (response) {
            var pokedexEntries = response.data.pokemon_entries;
            console.log(pokedexEntries)
            $scope.pokedexEntries = pokedexEntries;
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });

});

app.controller("pokemonEntry", function ($scope, $stateParams, PokedexServices) {
    console.log("Pokemon Entry")
    console.log($stateParams.pokeIndex)
    PokedexServices.getPokemonEntry($stateParams.pokeIndex)
        .then(function (response) {
           console.log("Response: ",response.data)
            $scope.pokemon = response.data
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
});