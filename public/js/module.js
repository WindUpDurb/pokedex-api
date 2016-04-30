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
                "test" : {template : "got stuff in here"}
            }
        })


   $urlRouterProvider.otherwise("/");
});