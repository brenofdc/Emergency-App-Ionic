angular.module('app.controllers', [])

.controller('emergencyCtrl', function($scope) {

})

.controller('favoritosCtrl', function($scope) {

    //var favoritos = hospitals.filter (function(item){return item.favorito});
})

.controller('checkInCheckOutCtrl', function($scope) {

})

.controller('avaliaOCtrl', function($scope) {

})

.controller('pesquisarCtrl', function($scope) {
    var item = new getHospitais();

    $scope.lista = item.hospitais;

    $scope.statusFavorito = function(item) {
      console.log('Favoritado', $scope.change.favorito);
    };

    $scope.change = { favorito: true };

})

.controller('hospitalCtrl', function($scope) {

})

.controller('nomeDoHospitalCtrl', function($scope) {

})
