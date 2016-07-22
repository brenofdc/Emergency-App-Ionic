angular.module('ionicApp', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal) {

  $scope.paciente = [
    { nome: 'Gordon Freeman' },
    { nome: 'Barney Calhoun' },
    { nome: 'Lamarr the Headcrab' },
  ];

  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.createContact = function(u) {
    $scope.contacts.push({ nome: p.primeiroNome + ' ' + p.segundoNome });
    $scope.modal.hide();
  };

});
