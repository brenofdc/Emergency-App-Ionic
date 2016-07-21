angular
    .module('starter')
    .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('menu', {
            url: '/menu',
            cache: false,
            templateUrl: 'templates/menu.html',
            controller: '',
        })
        .state('pesquisarHospital', {
            url: '/pesquisarHospital',
            cache: false,
            templateUrl: 'templates/pesquisarHospital.html',
            controller: '',
        })
        .state('hospitalDados', {
            url: '/hospitalDados',
            cache: false,
            templateUrl: 'templates/hospitalDados.html',
            controller: '',
        })
        .state('favoritos', {
            url: '/favoritos',
            cache: false,
            templateUrl: 'templates/favoritos.html',
            controller: '',
        })
        .state('config', {
            url: '/config',
            cache: false,
            templateUrl: 'templates/config.html',
            controller: '',
        })
        .state('checkin', {
            url: '/checkin',
            cache: false,
            templateUrl: 'templates/checkin.html',
            controller: '',
        });

    $urlRouterProvider.otherwise('/menu');

};
