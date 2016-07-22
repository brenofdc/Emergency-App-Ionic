(function() {
	"use strict";

	angular.module("myApp").controller("initCtrl", function($scope, Data, $ionicModal, $location, DBLocal, $ionicScrollDelegate){
		$scope.home = "Emergency";
		$scope.perfil = "Perfil";
		$scope.check = "Check-in / Check-out";
		$scope.avaliacao = "Avaliação";
		$scope.favoritos = "Favoritos"
		$scope.pesquisa = "Pesquisar";
		$scope.hospitais = [];
		$scope.myswipe = true;
		$scope.paginacao = true;

		$scope.loadMore = function() {
			var  params = {
				counter: $scope.hospitais.length,
				token:"1f3d2gs3f2fg3as2fdg3re2t1we46er45"
			};
			Data.getData(params).success(function(data) {
				if(data.length != 0){
					angular.forEach(data, function(result) {
						$scope.hospitais.push(result);
					});
					$scope.paginacao = true;
				}else{
					$scope.paginacao = false;
				}
				$scope.$broadcast('scroll.infiniteScrollComplete');
			});
		};


		// INSERINDO DADOS LOCALMENTE
		DBLocal.localdb();

		var nome = "Hospital Santa Lucia";
		var endereco = "Rua alguma coisa";
		var nota = "1";
		var pacientes = "5";

		// DBLocal.db.transaction(function(res) {
		// 	res.executeSql("INSERT INTO USER(nome, email, senha) VALUES(?,?,?);", [nome, email, senha]);
		// });

		//RECUPERANDO DADO LOCAL
		// DBLocal.db.transaction(function(res) {
		// 	var q = "SELECT * FROM USER";
		// 	res.executeSql(q, null, function(i, data) {
		// 		$scope.nome = "Olá " + data.rows.item(1).nome;
		// 	});
		// });

		DBLocal.db.transaction(function(res) {
			res.executeSql("DELETE FROM USER WHERE nome = ?;",[nome]);
		});

		//BANCO DE DADOS ONLINE
		var getData = function(){
			var  params = {
				counter:0,
				token:"1f3d2gs3f2fg3as2fdg3re2t1we46er45"
			};
		Data.getData(params).success(function(data){
				$scope.hospitais = data;

			}).error(function(data){
				console.log(data? data : "Não foi possivel acessar o servidor");
			});
		};
		$ionicModal.fromTemplateUrl('views/cadastro.html',{
			scope: $scope,
    			animation: 'slide-in-up'

		}).then(function(modal) {
		    $scope.modal = modal;
		  });
		 $scope.abreModal = function(){
		 	$scope.modal.show();
		 };
		$scope.fechaModal = function(){
		 	$scope.modal.hide();
		 };

		getData();
		//ENVIANDO DADOS
		$scope.cadastroUsuario = function(cadastro) {
			Data.setData(cadastro).success(function(data) {
				alert(data);
				$scope.modal.hide();
				getData();
			}).error(function(data) {
				alert(data);
			});

			console.log(cadastro);
		};

		//APAGAR DADOS
		$scope.apagar = function(hospital) {
			console.log(hospital.id);
			//CONFIRMANDO A OPERAÇÃO
			navigator.notification.confirm(
				"Tem certeza que deseja apagar este hospital?",
				apagarHospital,
				"Atenção",
				["Apagar", "Cancelar"]
			);

			//CALLBACK
			function apagarHospital(buttonIndex) {

				if(buttonIndex === 1){
					Data.delData(hospital.id).success(function(data) {
						navigator.notification.alert(data?data:"Não foi possivel deletar este hospital", null, "Menssagem", "OK");
						getData();
						  $ionicScrollDelegate.scrollTop();
					}).error(function(data) {
						navigator.notification.alert("Não foi possivel deletar este hospital, tente novamente!", null, "Menssagem", "OK");
					});
				};
			};
		};

		// IMPRIMINDO NO PERFIL
		$scope.perfilUsuario = function(id) {
			$scope.usuarioPerfil = $scope.hospitais.filter(function(element) {
				return element.id == id;
			});
			console.log($scope.usuarioPerfil);
			$location.path("/menu/perfil");
		};

		// PÁGINA FAVORITOS
		$scope.carregarFavoritos = function() {
			//console.log();
			$location.path("menu/favoritos");
		};

		// PÁGINA CHECK-IN/OUT
		$scope.carregarCheck = function() {
			//console.log();
			$location.path("menu/check-in-out");
		};

		// PÁGINA AVALIAÇÃO
		$scope.carregarAvalicao = function() {
			//console.log();
			$location.path("menu/avaliacao");
		};

		// PÁGINA PESQUISAR
		$scope.carregarPesquisar = function() {
			//console.log();
			$location.path("menu/pesquisar");
		};

	});
})();
