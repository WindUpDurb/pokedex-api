"use strict";

var app = angular.module("pokedexApp");

app.service("PokedexServices", function ($http) {
    
    this.getPokedex = function (region) {
        return $http.get(`http://pokeapi.co/api/v2/pokedex/${region}/`)
    };

    this.getPokemonEntry = function (pokemon) {
        console.log(pokemon)
        return $http.get(`http://pokeapi.co/api/v2/pokemon/${pokemon}`)
    }
});