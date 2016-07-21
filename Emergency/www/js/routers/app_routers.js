(function(){
	"use strict";
	angular.module("myApp").config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/menu/home");

		$stateProvider

		.state("menu", {
			url:"/menu",
			templateUrl:"views/menu.html",
			abstract: true,
			controller: "initCtrl"
		})


		.state("menu.home", {
			url:"/home",
			views:{
				'menuContent':{
					templateUrl:"views/home.html"
				}
			}
		})

		.state("menu.favorite", {
			url:"/favorite",
			views:{
				'menuContent':{
					templateUrl:"views/favorite.html",
				}
			}
		})

		.state("menu.home.map", {
			url:"/map",
			templateUrl:"views/map.html"

		})

        .state("menu.home.settings", {
			url:"/settings",
			templateUrl:"views/settings.html"

		})
        
        .state("menu.home.check", {
			url:"/check",
			templateUrl:"views/check.html"

		})

        .state("menu.home.evaluation", {
			url:"/evaluation",
			templateUrl:"views/evaluation.html"

		})

        .state("menu.home.search", {
			url:"/search",
			templateUrl:"views/search.html"

		});


	});
})();
