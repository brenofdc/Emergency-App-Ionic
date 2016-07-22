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

		.state("menu.perfil", {
			url:"/perfil",
			views:{
				'menuContent':{
					templateUrl:"views/perfil.html",
				}
			}
		})

		.state("menu.favoritos", {
			url:"/favoritos",
			views:{
				'menuContent':{
					templateUrl:"views/favoritos.html",
				}
			}
		})

		.state("menu.avaliacao", {
			url:"/avaliacao",
			views:{
				'menuContent':{
					templateUrl:"views/avaliacao.html",
				}
			}
		})

		.state("menu.check-in-out", {
			url:"/check-in-out",
			views:{
				'menuContent':{
					templateUrl:"views/check-in-out.html",
				}
			}
		})

		.state("menu.Pesquisar", {
			url:"/pesquisar",
			views:{
				'menuContent':{
					templateUrl:"views/pesquisar.html",
				}
			}
		})

		.state("menu.home.cadastro", {
			url:"/cadastro",
			templateUrl:"views/cadastro.html"

		});


	});
})();
