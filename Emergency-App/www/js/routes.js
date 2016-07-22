angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('emergency', {
    url: '/page1',
    templateUrl: 'templates/emergency.html',
    controller: 'emergencyCtrl'
  })

  .state('favoritos', {
    url: '/page2',
    templateUrl: 'templates/favoritos.html',
    controller: 'favoritosCtrl'
  })

  .state('checkInCheckOut', {
    url: '/page3',
    templateUrl: 'templates/checkInCheckOut.html',
    controller: 'checkInCheckOutCtrl'
  })

  .state('avaliaO', {
    url: '/page4',
    templateUrl: 'templates/avaliaO.html',
    controller: 'avaliaOCtrl'
  })

  .state('pesquisar', {
    url: '/page5',
    templateUrl: 'templates/pesquisar.html',
    controller: 'pesquisarCtrl'
  })

  .state('hospital', {
    url: '/page7',
    templateUrl: 'templates/hospital.html',
    controller: 'hospitalCtrl'
  })

  .state('nomeDoHospital', {
    url: '/page8',
    templateUrl: 'templates/nomeDoHospital.html',
    controller: 'nomeDoHospitalCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});