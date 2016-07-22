angular.module('ionicApp', ['ionic'])

.controller('MainCtrl', function($scope) {

  $scope.settingsList = [
    { text: "Breno", checked: true },
    { text: "Johnathan", checked: false },
    { text: "Thiago", checked: false }
  ];

  $scope.pushNotificaçãoMudança = function() {
    console.log('Push Notificação Mudança', $scope.pushNotificação.checked);
  };

  $scope.pushNotificação = { checked: true };
  $scope.emailnotificação = 'Subscribed';

});
