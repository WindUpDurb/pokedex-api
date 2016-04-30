"use strict";

var app = angular.module("pokedexApp", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl : "/html/home.html",
            controller: "homeController"
        })
        .state("kanto", {
            url: "/kanto",
            views : {
                "pokedexEntries" : {
                    templateUrl : "/html/home.html",
                    controller: "kantoController"
                },
                "pokeEntry" : {
                    templateUrl : "/html/pokedexPokeEntryView.html"
                }
            }

        })
        .state("johto", {
            url : "/johto",
            views: {
                "pokedexEntries" : {
                    templateUrl : "/html/home.html",
                    controller: "johtoController"
                },
                "pokeEntry" : {
                    templateUrl : "/html/pokedexPokeEntryView.html"
                }
            }
        })
        .state("pokemonEntry", {
            url : "/pokemonEntry/:pokeIndex",
            views : {
                "" : {
                    templateUrl : "/html/home.html",
                },
                "pokeEntry" : {
                    templateUrl : "/html/pokeEntry.html",
                    controller : "pokemonEntry"
                }
            }
        })


   $urlRouterProvider.otherwise("/");
});