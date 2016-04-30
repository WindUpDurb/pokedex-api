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
            templateUrl : "/html/home.html",
            controller: "kantoController"
        })
        .state("johto", {
            url : "/johto",
            templateUrl : "/html/home.html",
            controller: "johtoController"
        })
        .state("pokedexEntry", {
            url : "/pokedexEntry",
            views: {
                "" : {
                    controller: "johtoController"
                },
                "test" : {
                    templateUrl : "/html/test.html",
                }
            }
        })

   $urlRouterProvider.otherwise("/");
});